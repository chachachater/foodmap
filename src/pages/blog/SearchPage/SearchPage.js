import React, { useCallback, useState, useEffect, useMemo } from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import Search from "../../../components/Search";
import { Article } from "../../../components/Article";
import ImageViewer from "../../../components/ImageViewer";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import _ from "lodash";
import { fetchPostsAndPicturesByPlaceId } from "../../../WebAPI";
import {
  SearchContainer,
  SearchBorder,
  SearchMap,
  SearchInfo,
  RestaurantInfo,
  InfoTitle,
  InfoContent,
  InfoText,
  AddLogo,
  BhLogo,
  UrlLogo,
  InfoImg,
} from "./SearchPageStyle";
const mapApiKey = process.env.REACT_APP_MAP_KEY;
const Marker = ({ text }) => {
  return (
    <div>
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
    {
      src: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [restaurantList, setRestaurantList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [postsData, setPostsData] = useState([]);
  const [myPosition, setMyPosition] = useState({
    lat: 24.953631,
    lng: 121.225591,
  });
  const [filter, setFilter] = useState("createdAt");
  // const [focused, setFocused] = useState(false);
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
          console.log(results);
          setRestaurantInfo(results);
          setInputText(name);
          setRestaurantList([]);
        }
      });
    }
  }
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
    if (postsData.length) setPhotos(arr);
  }, [postsData]);
  function handleInputChange(e) {
    setInputText(e.target.value);
  }
  // useEffect(() => {
  //   if (!focused) setRestaurantList([]);
  // }, [focused]);
  return (
    <Wrapper>
      <Navbar />
      <SearchContainer>
        <SearchBorder>
          <Search
            text={"餐廳名稱"}
            handleInputChange={handleInputChange}
            inputText={inputText}
            restaurantList={restaurantList}
            handleSearchRestaurant={handleSearchRestaurant}
            // setFocused={setFocused}
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
          <RestaurantInfo>
            <InfoTitle>{restaurantInfo.name}</InfoTitle>
            <InfoContent>
              {restaurantInfo.formatted_address && <AddLogo />}
              <InfoText>{restaurantInfo.formatted_address}</InfoText>
            </InfoContent>
            <InfoContent>
              {restaurantInfo.opening_hours && <BhLogo />}
              <InfoText>
                {restaurantInfo.opening_hours &&
                  restaurantInfo.opening_hours.weekday_text.map(
                    (item, index) => {
                      return <div key={index}>{item}</div>;
                    }
                  )}
              </InfoText>
            </InfoContent>
            <InfoContent>
              {restaurantInfo.website && <UrlLogo />}
              <InfoText>{restaurantInfo.website}</InfoText>
            </InfoContent>
          </RestaurantInfo>
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
Marker.propTypes = {
  text: PropTypes.string,
  placeId: PropTypes.string,
};

export default SearchPage;
