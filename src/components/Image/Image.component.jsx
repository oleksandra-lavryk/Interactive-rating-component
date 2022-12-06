import React from "react";
import "./Image.styles.css";

export const Image = ({ isRate }) => {
  const backgroundPath = isRate
    ? process.env.PUBLIC_URL + "/illustration-thank-you.svg"
    : process.env.PUBLIC_URL + "/icon-star.svg";

  return (
    <div
      className={isRate ? "thanks-image" : "star-image"}
      style={{
        backgroundImage: `url(${backgroundPath})`,
      }}
    ></div>
  );
};
