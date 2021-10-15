import React from "react";
import Popup from "reactjs-popup";
import MyMap from "../Map/map";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
  &-content {
    margin: auto;
    background: #fff;
    width: 90%;
    padding: 5px;
    border: 1px solid #d7d7d7;
  }
  [role="tooltip"].popup-content {
    width: 200px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
    border-radius: 5px;
  }
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  [data-popup="tooltip"].popup-overlay {
    background: transparent;
  }
  &-arrow {
    -webkit-filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.16));
    filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.16));
    color: #fff;
    stroke-width: 2px;
    stroke: #d7d7d7;
    stroke-dasharray: 30px;
    stroke-dashoffset: -54px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
const Modal = styled.div`
  font-size: 12px;
  & > .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .content {
    width: 100%;
    padding: 10px 5px;
  }
  .actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  }
`;

function PopUp({
  placeHolder,
  restaurantId,
  getRestaurantId,
  restaurantName,
  setRestaurantName,
}) {
  return (
    <StyledPopup
      trigger={
        <button className="button">{restaurantName || placeHolder}</button>
      }
      modal
      nested
    >
      {(close) => (
        <Modal>
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> 選擇餐廳 </div>
          <div className="content">
            <MyMap
              restaurantId={restaurantId}
              getRestaurantId={getRestaurantId}
              setRestaurantName={setRestaurantName}
              close={close}
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
        </Modal>
      )}
    </StyledPopup>
  );
}

PopUp.propTypes = {
  placeHolder: PropTypes.string,
  restaurantId: PropTypes.string,
  getRestaurantId: PropTypes.func,
  restaurantName: PropTypes.string,
  setRestaurantName: PropTypes.func,
};

export default PopUp;
