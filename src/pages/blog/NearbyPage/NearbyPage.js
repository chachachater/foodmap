import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import {
  SearchContainer,
  SearchBorder,
  RestaurantInfoContainer,
} from "../SearchPage/SearchPageStyle";
import {
  Map,
  Luck,
  LuckButton,
  MarginContainer,
  MyPosition,
  IsLoading,
} from "./NearbyPageStyle";
import { NearbyMarker } from "../../../components/Map/mapComponents";
import ImageViewer from "../../../components/ImageViewer";
import GoogleMapReact from "google-map-react";
import _ from "lodash";
import PropTypes from "prop-types";
import Search from "../../../components/Search";
import Loading from "../../../components/Loading/Loading";

const mapApiKey = process.env.REACT_APP_MAP_KEY;

function NearbyPage(props) {
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [places, setPlaces] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [inputText, setInputText] = useState("");
  const [myPosition, setMyPosition] = useState({
    lat: 25.0428937,
    lng: 121.5054199,
  });
  const [currentCenter, setCurrentCenter] = useState(myPosition);
  const [photos, setPhotos] = useState(null);
  const [isFold, setIsFold] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [markerIsLoading, setMarkerIsLoading] = useState(false);
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

  const nearbySearch = () => {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);

      const request = {
        location: myPosition,
        radius: 1000,
        type: ["restaurant"],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      });
    }
  };
  function handleTextSearch() {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);

      const request = {
        query: inputText,
        fields: ["All"],
      };

      service.findPlaceFromQuery(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          setCurrentCenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
          setMyPosition({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        }
      });
    }
  }
  useEffect(() => {
    handleDebounce(inputText);
  }, [inputText, handleDebounce, handleAutocomplete]);

  useEffect(() => {
    setMarkerIsLoading(true);
    nearbySearch();
  }, [myPosition]);

  // useEffect(() => {
  //   if (!focused) setRestaurantList([]);
  // }, [focused]);

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
  useEffect(() => {
    if (!restaurantInfo.photos) return;
    let arr = [];
    restaurantInfo.photos.map((photo) => {
      arr.push({ src: photo.getUrl() });
    });
    setPhotos(arr);
  }, [restaurantInfo]);
  useEffect(() => {
    setMarkerIsLoading(false);
  }, [places]);
  useEffect(() => {
    if (mapApiLoaded) setIsLoading(false);
  }, [mapApiLoaded]);
  function handleGoodLuck() {
    const num = Math.floor(Math.random() * 20);
    const randomRestaurant = places[num];
    handleMarkerClickedAndSearch(
      randomRestaurant.place_id,
      randomRestaurant.name
    );
  }
  return (
    <Wrapper>
      {isLoading && <Loading />}
      <Navbar />
      <SearchContainer>
        <SearchBorder>
          <Search
            text="請輸入所在地"
            handleInputChange={handleInputChange}
            inputText={inputText}
            restaurantList={restaurantList}
            handleSearchRestaurant={searchRestaurantById}
            handleTextSearch={handleTextSearch}
          />
        </SearchBorder>
        <Map>
          {markerIsLoading && (
            <IsLoading
              onClick={() => {
                setMarkerIsLoading(false);
              }}
            >
              載入中...
            </IsLoading>
          )}
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
              <NearbyMarker
                key={index}
                lat={item.geometry.location.lat()}
                lng={item.geometry.location.lng()}
                text={item.name}
                placeId={item.place_id}
                handleMarkerClickedAndSearch={handleMarkerClickedAndSearch}
              />
            ))}
          </GoogleMapReact>
          <MarginContainer>
            <RestaurantInfoContainer
              restaurantInfo={restaurantInfo}
              isFold={isFold}
              setIsFold={setIsFold}
            />
            {photos && <ImageViewer photos={photos} />}
          </MarginContainer>
        </Map>
        <Luck>
          <LuckButton onClick={handleSearchNearbyFood}>
            搜尋這附近餐廳
          </LuckButton>
          <LuckButton onClick={handleGoodLuck}>好手氣</LuckButton>
        </Luck>
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
NearbyMarker.propTypes = {
  text: PropTypes.string,
  handleMarkerClickedAndSearch: PropTypes.func,
  placeId: PropTypes.string,
};
export default NearbyPage;
