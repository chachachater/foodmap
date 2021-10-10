import React, { useCallback, useState, useEffect, useMemo } from "react";
import GoogleMapReact from "google-map-react";
import { ClickedMarker } from "./mapComponents";
import PropTypes from "prop-types";
import _ from "lodash";
import { SearchBox } from "../Search/SearchStyle";
const mapApiKey = process.env.REACT_APP_MAP_KEY;

function SimpleMap(props) {
  const { center, zoom, placeId, setPlaceId, setRestaurantName, close } = props;
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [places, setPlaces] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [focused, setFocused] = useState(false);
  const [myPosition, setMyPosition] = useState({
    lat: 24.953631,
    lng: 121.225591,
  });
  const handleApiLoaded = (map, maps) => {
    setMapInstance(map);
    setMapApi(maps);
    setMapApiLoaded(true);
  };
  useEffect(() => {
    if (!focused) setRestaurantList([]);
  }, [focused]);
  useEffect(() => {
    if (placeId) {
      handleSearchRestaurant(placeId);
    }
    console.log(placeId);
  }, [mapApiLoaded]);
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
  const debounce = useMemo(() => {
    return _.debounce((inputText) => {
      handleAutocomplete(inputText);
    }, 800);
  }, [handleAutocomplete]);
  function handleSearchRestaurant(placeId, text) {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);

      const request = {
        placeId,
      };

      service.getDetails(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          setMyPosition({
            lat: results.geometry.location.lat(),
            lng: results.geometry.location.lng(),
          });
          console.log(results);
          setInputText(text);
          setPlaces([results]);
        }
      });
    }
  }
  useEffect(() => {
    debounce(inputText);
  }, [inputText, debounce, handleAutocomplete]);
  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleSetPlaceId(place_id) {
    setPlaceId(place_id);
    setRestaurantName(inputText);
    close();
  }
  return (
    // Important! Always set the container height explicitly
    <>
      <SearchBox
        text={"在哪裡吃的？"}
        handleInputChange={handleInputChange}
        inputText={inputText}
        restaurantList={restaurantList}
        handleSearchRestaurant={handleSearchRestaurant}
        setFocused={setFocused}
      />
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          center={myPosition}
          bootstrapURLKeys={{
            key: mapApiKey,
            language: "zh-TW",
            libraries: ["places"],
          }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals // 設定為 true
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)} // 載入完成後執行
        >
          {places.map((item, index) => (
            <ClickedMarker
              key={index}
              lat={item.geometry.location.lat()}
              lng={item.geometry.location.lng()}
              text={item.name}
              placeId={item.place_id}
              handleSetPlaceId={handleSetPlaceId}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
}
SimpleMap.defaultProps = {
  center: {
    lat: 24.953631,
    lng: 121.225591,
  },
  zoom: 17,
};
SimpleMap.propTypes = {
  placeId: PropTypes.string,
  setPlaceId: PropTypes.func,
  center: PropTypes.object,
  zoom: PropTypes.number,
  setRestaurantName: PropTypes.func,
  close: PropTypes.func,
};

function MyMap({ restaurantId, getRestaurantId, setRestaurantName, close }) {
  console.log(getRestaurantId);
  return (
    <div className="App">
      <SimpleMap
        placeId={restaurantId}
        setPlaceId={getRestaurantId}
        setRestaurantName={setRestaurantName}
        close={close}
      />
    </div>
  );
}
MyMap.propTypes = {
  restaurantId: PropTypes.string,
  getRestaurantId: PropTypes.func,
  setRestaurantName: PropTypes.func,
  close: PropTypes.func,
};
export default MyMap;
