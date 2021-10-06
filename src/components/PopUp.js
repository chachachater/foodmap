import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import MyMap from "../components/Map/map";
import PropTypes from "prop-types";

function PopUp({ placeHolder, restaurantId, getRestaurantId }) {
  return (
    <Popup
      trigger={<button className="button">{placeHolder}</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> 選擇餐廳 </div>
          <div className="content">
            <MyMap
              restaurantId={restaurantId}
              getRestaurantId={getRestaurantId}
            />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              送出選擇
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

PopUp.propTypes = {
  placeHolder: PropTypes.string,
  restaurantId: PropTypes.string,
  getRestaurantId: PropTypes.func,
};

export default PopUp;
