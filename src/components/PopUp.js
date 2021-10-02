/* eslint-disable */
import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MyMap from "../components/Map/map";

function PopUp({ placeHolder, restaurantId, getResaurantId}) {
  return (
    <Popup
      trigger={<button className="button">{placeHolder}</button>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
        </button>
          <div className="header"> Modal Title </div>
          <div className="content">

            <MyMap restaurantId={restaurantId} getResaurantId={getResaurantId}/>
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger !!</button>}
              position="top center"
              nested
            >
              <span>123
            </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              Close modal
          </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

PopUp.propTypes = {
  placeHolder: String,
  getResaurantId: Function,
}
export default PopUp