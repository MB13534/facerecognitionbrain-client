import React from "react";
import "./FaceRecgonition.css";

const FaceRecgonition = ({ imgUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2 center">
        <img
          id="inputimage"
          src={imgUrl}
          alt="Rendered Image"
          width="500px"
          height="auto"
        />

        {boxes.map((box, index) => {
          return (
            <div
              key={index}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecgonition;
