import React from "react";
import ImgsViewer from "react-images-viewer";
import PropTypes from "prop-types";

function ReactImageViewer(props) {
  console.log(props.imgs)
  return (
    <>
      <ImgsViewer
        imgs={props.imgs}
        isOpen={props.isOpen}
        onClose={props.onClose}
        currImg={props.currImg}
        onClickPrev={props.onClickPrev}
        onClickNext={props.onClickNext}
      />
    </>
  );
}

ReactImageViewer.propTypes = {
  imgs: PropTypes.array,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  currImg: PropTypes.number,
  onClickPrev: PropTypes.func,
  onClickNext: PropTypes.func,
};

export default ReactImageViewer;
