import React, { useCallback, useState, useEffect, useMemo } from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import Search from "../../../components/Search";
import { Article } from "../../../components/Article";
import ImageViewer from "../../../components/ImageViewer";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { useLocation } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import _ from "lodash";
import { fetchPostsAndPicturesByPlaceId } from "../../../WebAPI";
import {
  SearchContainer,
  SearchBorder,
  SearchMap,
  SearchInfo,
  RestaurantInfoContainer,
  InfoImg,
} from "./SearchPageStyle";
import { Marker } from "../../../components/Map/mapComponents";
const mapApiKey = process.env.REACT_APP_MAP_KEY;

function SearchPage(props) {
  const [photos, setPhotos] = useState([
    {
      src: "https://images.unsplash.com/photo-1612927601601-6638404737ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1604262590904-0039c606dc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1184&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [restaurantList, setRestaurantList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [postsData, setPostsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [myPosition, setMyPosition] = useState({
    lat: 24.953631,
    lng: 121.225591,
  });
  const [isFold, setIsFold] = useState(true);
  const [filter, setFilter] = useState("createdAt");
  const [focused, setFocused] = useState(false);
  let query = new URLSearchParams(useLocation().search);
  const handleApiLoaded = (map, maps) => {
    setMapInstance(map);
    setMapApi(maps);
    setMapApiLoaded(true);
  };
  const handleAutocomplete = useCallback(
    (inputValue) => {
      if (mapApiLoaded) {
        const service = new mapApi.places.AutocompleteService();
        const request = {
          input: inputValue,
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
  function handleSearchRestaurant(placeId, name) {
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
          setRestaurantInfo(results);
          setInputText(name);
          setRestaurantList([]);
        }
      });
    }
  }
  function handleTextSearch() {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);

      const request = {
        query: inputText,
        fields: ["All"],
      };

      service.findPlaceFromQuery(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          setMyPosition({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
          setRestaurantInfo(results[0]);
        }
      });
    }
  }
  useEffect(() => {
    handleDebounce(inputText);
  }, [inputText, handleDebounce, handleAutocomplete]);
  useEffect(async () => {
    if (!mapApiLoaded) return;
    let results = await fetchPostsAndPicturesByPlaceId(
      5,
      0,
      restaurantInfo.place_id,
      filter
    );
    if (results) setPostsData(results.rows);
  }, [restaurantInfo, filter]);
  useEffect(() => {
    let arr = [];
    postsData.map((post) => {
      let src = post.Pictures[0].food_picture_url;
      arr.push({ src });
    });
    if (postsData.length) return setPhotos(arr);
    if (!restaurantInfo.photos) return;
    arr = [];
    restaurantInfo.photos.map((photo) => {
      let src = photo.getUrl();
      arr.push({ src });
    });
    setPhotos(arr);
  }, [postsData, restaurantInfo]);
  function handleInputChange(e) {
    setInputText(e.target.value);
  }
  useEffect(() => {
    if (!focused) setRestaurantList([]);
  }, [focused]);
  useEffect(() => {
    if (!mapApiLoaded) return;
    setIsLoading(false);
    setInputText(query.get("query"));
  }, [mapApiLoaded]);
  return (
    <Wrapper>
      {isLoading && <Loading />}
      <Navbar />
      <SearchContainer>
        <SearchBorder>
          <Search
            text={"餐廳名稱"}
            handleInputChange={handleInputChange}
            inputText={inputText}
            restaurantList={restaurantList}
            handleSearchRestaurant={handleSearchRestaurant}
            setFocused={setFocused}
            handleTextSearch={handleTextSearch}
          />
        </SearchBorder>
        <SearchMap>
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
            <Marker
              text={restaurantInfo.name}
              lat={
                restaurantInfo.geometry
                  ? restaurantInfo.geometry.location.lat()
                  : 0
              }
              lng={
                restaurantInfo.geometry
                  ? restaurantInfo.geometry.location.lng()
                  : 0
              }
            />
          </GoogleMapReact>
        </SearchMap>
        <SearchInfo>
          <RestaurantInfoContainer
            restaurantInfo={restaurantInfo}
            isFold={isFold}
            setIsFold={setIsFold}
          />
          <InfoImg>
            <ImageViewer photos={photos} />
          </InfoImg>
        </SearchInfo>
        <Article postsData={postsData} setFilter={setFilter} />
      </SearchContainer>
    </Wrapper>
  );
}
SearchPage.defaultProps = {
  center: {
    lat: 24.953631,
    lng: 121.225591,
  },
  zoom: 16,
};
SearchPage.propTypes = {
  props: PropTypes.object,
  center: PropTypes.object,
  zoom: PropTypes.number,
};

export default SearchPage;
