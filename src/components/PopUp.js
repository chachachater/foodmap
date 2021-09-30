/* eslint-disable */
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopUp({placeHolder}) {
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
            {' '}
            <input type="text" />
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger !!</button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
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
}
export default PopUp