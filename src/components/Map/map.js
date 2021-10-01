/* eslint-disable */
import React, { useCallback, useState, useEffect, useMemo } from "react";
import mapApiKey from "./key"; // 引入 API key
import GoogleMapReact from "google-map-react";
import _ from "lodash";

const MyPosition = ({ text }) => {
  return (
    <div>
      <img
        alt={"myposition"}
        style={{ height: "50px", width: "50px", background: "transparent" }}
        src={
          "https://icon-library.com/images/my-location-icon/my-location-icon-29.jpg"
        }
      />
      <div>{text}</div>
    </div>
  );
};

const CafeMarker = ({ text, handleMarkerClicked, placeId }) => {
  return (
    <div
      onClick={() => {
        handleMarkerClicked(placeId);
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

// function handleClickMarker(obj) {
//   console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
// }
const RestaurantInfo = ({ Info }) => {
  console.log(Info);
  const {
    name,
    business_status,
    formatted_address,
    formatted_phone_number,
    opening_hours,
  } = Info;
  return (
    <div>
      <div>名稱：{name}</div>
      <div>地址：{formatted_address}</div>
      <div>現在狀態：{business_status}</div>
      <div>電話：{formatted_phone_number}</div>
      {opening_hours &&
        opening_hours.weekday_text.map((item, index) => {
          return <div key={index}>營業時間：{item}</div>;
        })}
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
        marginLeft: "30px",
      }}
    >
      <div>
        <input
          type="text"
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
              style={{ background: "white" }}
              key={index}
              onClick={() => {
                handleSearchRestaurant(data.place_id);
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

const SimpleMap = (props) => {
  const [mapApiLoaded, setMapApiLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState(null)
  const [mapApi, setMapApi] = useState(null)
  const [places, setPlaces] = useState([])
  const [restaurantList, setRestaurantList] = useState([])
  const [inputText, setInputText] = useState("")
  const [restaurantInfo, setRestaurantInfo] = useState({})
  const [myPosition, setMyPosition] = useState({
    lat: 24.953631,
    lng: 121.225591,
  });

  const handleApiLoaded = (map, maps) => {
    setMapInstance(map);
    setMapApi(maps);
    setMapApiLoaded(true);
  };
  const handleAutocomplete = useCallback((inputValue) => {
    if (mapApiLoaded) {
      const service = new mapApi.places.AutocompleteService();
      const request = {
        input: inputValue,
      };

      service.getPlacePredictions(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          console.log(results);
          setRestaurantList(results);
        }
      });
    }
  })
  function handleSearchBtn() {
    setMyPosition({
      // center.lat() 與 center.lng() 會回傳正中心的經緯度
      lat: mapInstance.center.lat(),
      lng: mapInstance.center.lng(),
    });
  }
  const findCafeLocation = () => {
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
    findCafeLocation()
  }, [myPosition, findCafeLocation])
  function handleSearchRestaurant(placeId) {
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
          setRestaurantInfo(results);
          setRestaurantList([]);
        }
      });
    }
  }
  const testDebounce = useMemo(() => {
    return _.debounce((inputText) => {
      handleAutocomplete(inputText);
    }, 800)
  }, [handleAutocomplete])

  useEffect(() => {
    testDebounce(inputText)
  }, [inputText, testDebounce, handleAutocomplete])
  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleMarkerClicked(place_id) {
    handleSearchRestaurant(place_id);
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
          bootstrapURLKeys={{ key: mapApiKey, libraries: ["places"] }}
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
            <CafeMarker
              key={index}
              lat={item.geometry.location.lat()}
              lng={item.geometry.location.lng()}
              text={item.name}
              placeId={item.place_id}
              handleMarkerClicked={handleMarkerClicked}
            />
          ))}
        </GoogleMapReact>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handleSearchBtn}>搜尋附近美食</button>
        </div>
        <RestaurantInfo Info={restaurantInfo} />
      </div>
    </>
  );
};

// 由於改寫成 functional component，故另外設定 defaultProps
SimpleMap.defaultProps = {
  center: {
    lat: 24.953631,
    lng: 121.225591,
  },
  zoom: 17,
};

function MyMap() {
  return (
    <div className="App">
      <SimpleMap />
    </div>
  );
}

export default MyMap;