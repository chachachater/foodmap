import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import { SearchContainer, SearchBorder } from "../SearchPage/SearchPageStyle";
import { RestaurantInfoContainer } from "../SearchPage/SearchPageStyle";
import { Map, Luck, LuckButton } from "./NearbyPageStyle";
import GoogleMapReact from "google-map-react";
import _ from "lodash";
import PropTypes from "prop-types";
import Search from "../../../components/Search";

const mapApiKey = process.env.REACT_APP_MAP_KEY;
const MyPosition = ({ text }) => {
  return (
    <div>
      <img
        alt={"current position"}
        style={{ height: "35px", width: "35px", background: "transparent" }}
        src={
          "https://icon-library.com/images/my-location-icon/my-location-icon-29.jpg"
        }
      />
      <div>{text}</div>
    </div>
  );
};
const Marker = ({ text, handleMarkerClickedAndSearch, placeId }) => {
  return (
    <div
      onClick={() => {
        handleMarkerClickedAndSearch(placeId, text);
      }}
    >
      <img
        alt={"marker"}
        style={{ maxHeight: "30px", background: "transparent" }}
        src={
          "https://www.pinclipart.com/picdir/big/126-1269086_google-map-marker-red-peg-png-image-red.png"
        }
      />
      <div>{text}</div>
    </div>
  );
};
function NearbyPage(props) {
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [places, setPlaces] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [inputText, setInputText] = useState("");
  const [myPosition, setMyPosition] = useState({
    lat: 24.953631,
    lng: 121.225591,
  });
  const [currentCenter, setCurrentCenter] = useState(myPosition);

  const handleApiLoaded = (map, maps) => {
    setMapInstance(map);
    setMapApi(maps);
    setMapApiLoaded(true);
  };
  const handleAutocomplete = useCallback(
    (value) => {
      if (mapApiLoaded) {
        const service = new mapApi.places.AutocompleteService();
        const request = {
          input: value,
        };

        service.getPlacePredictions(request, (results, status) => {
          if (status === mapApi.places.PlacesServiceStatus.OK) {
            console.log(results);
            setRestaurantList(results);
          }
        });
      }
    },
    [mapApiLoaded]
  );
  const handleDebounce = useMemo(() => {
    return _.debounce((inputText) => {
      handleAutocomplete(inputText);
    }, 800);
  }, [handleAutocomplete]);
  useEffect(() => {
    handleDebounce(inputText);
  }, [inputText, handleDebounce, handleAutocomplete]);

  const nearbySearch = () => {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);

      const request = {
        location: myPosition,
        radius: 1000,
        type: ["food"],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      });
    }
  };
  useEffect(() => {
    nearbySearch();
  }, [myPosition, nearbySearch]);

  function searchRestaurantById(placeId, name) {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);

      const request = {
        placeId,
      };
      service.getDetails(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          setCurrentCenter({
            lat: results.geometry.location.lat(),
            lng: results.geometry.location.lng(),
          });
          setMyPosition({
            lat: results.geometry.location.lat(),
            lng: results.geometry.location.lng(),
          });
          console.log(results);
          setInputText(name);
          setRestaurantList([]);
        }
      });
    }
  }
  function handleMarkerClickedAndSearch(placeId, name) {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);

      const request = {
        placeId,
      };
      service.getDetails(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          setCurrentCenter({
            lat: results.geometry.location.lat(),
            lng: results.geometry.location.lng(),
          });
          console.log(results);
          setRestaurantInfo(results);
          setInputText(name);
          setRestaurantList([]);
        }
      });
    }
  }
  function handleInputChange(e) {
    setInputText(e.target.value);
  }
  function handleSearchNearbyFood() {
    setMyPosition({
      lat: mapInstance.center.lat(),
      lng: mapInstance.center.lng(),
    });
    setCurrentCenter({
      lat: mapInstance.center.lat(),
      lng: mapInstance.center.lng(),
    });
  }
  // function handleClickedRandomRestaurant() {
  //   nearbySearch();
  // }
  return (
    <Wrapper>
      <Navbar />
      <SearchContainer>
        <SearchBorder>
          <Search
            text="請輸入所在地"
            handleInputChange={handleInputChange}
            inputText={inputText}
            restaurantList={restaurantList}
            handleSearchRestaurant={searchRestaurantById}
          />
        </SearchBorder>
        <Map>
          <GoogleMapReact
            center={currentCenter}
            bootstrapURLKeys={{
              key: mapApiKey,
              libraries: ["places"],
              language: "zh-TW",
            }}
            defaultCenter={props.center}
            defaultZoom={props.zoom}
            yesIWantToUseGoogleMapApiInternals // 設定為 true
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)} // 載入完成後執行
          >
            <MyPosition
              lat={myPosition.lat}
              lng={myPosition.lng}
              text="My Position"
            />
            {places.map((item, index) => (
              <Marker
                key={index}
                lat={item.geometry.location.lat()}
                lng={item.geometry.location.lng()}
                text={item.name}
                placeId={item.place_id}
                handleMarkerClickedAndSearch={handleMarkerClickedAndSearch}
              />
            ))}
          </GoogleMapReact>
        </Map>
        <Luck>
          <LuckButton onClick={handleSearchNearbyFood}>
            搜尋這附近餐廳
          </LuckButton>
        </Luck>
        <RestaurantInfoContainer restaurantInfo={restaurantInfo} />
      </SearchContainer>
    </Wrapper>
  );
}
NearbyPage.defaultProps = {
  center: {
    lat: 24.953631,
    lng: 121.225591,
  },
  zoom: 17,
};
NearbyPage.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
};
MyPosition.propTypes = {
  text: PropTypes.string,
};
Marker.propTypes = {
  text: PropTypes.string,
  handleMarkerClickedAndSearch: PropTypes.func,
  placeId: PropTypes.string,
};
export default NearbyPage;
