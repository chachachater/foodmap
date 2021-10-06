/* eslint-disable */
import React, { useCallback, useState, useEffect, useMemo } from "react";
import GoogleMapReact from "google-map-react";
import _ from "lodash";
const mapApiKey = process.env.REACT_APP_MAP_KEY;

const Marker = ({ text, handleSetPlaceId, placeId }) => {
  return (
    <div
      onClick={() => {
        handleSetPlaceId(placeId);
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
const SearchBox = ({
  handleInputChange,
  inputText,
  restaurantList,
  handleSearchRestaurant,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        zIndex: "999",
        border: "solid gray 1px",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="選擇餐廳"
          value={inputText}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </div>
      <div>
        {restaurantList.map((data, index) => {
          return (
            <div
              style={{ background: "white", fontSize: "16px" }}
              key={index}
              onClick={() => {
                handleSearchRestaurant(
                  data.place_id,
                  data.structured_formatting.main_text
                );
              }}
            >
              {data.terms[0].value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function SimpleMap(props) {
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [places, setPlaces] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [inputText, setInputText] = useState("");
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
    if (props.placeId) {
      handleSearchRestaurant(props.placeId);
    }
    console.log(props.placeId);
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
    props.setPlaceId(place_id);
  }
  return (
    // Important! Always set the container height explicitly
    <>
      <SearchBox
        handleInputChange={handleInputChange}
        inputText={inputText}
        restaurantList={restaurantList}
        handleSearchRestaurant={handleSearchRestaurant}
      />
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          center={myPosition}
          bootstrapURLKeys={{
            key: mapApiKey,
            language: "zh-TW",
            libraries: ["places"],
          }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          yesIWantToUseGoogleMapApiInternals // 設定為 true
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)} // 載入完成後執行
        >
          {places.map((item, index) => (
            <Marker
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
function MyMap({ restaurantId, getResaurantId }) {
  return (
    <div className="App">
      <SimpleMap placeId={restaurantId} setPlaceId={getResaurantId} />
    </div>
  );
}
export default MyMap;
