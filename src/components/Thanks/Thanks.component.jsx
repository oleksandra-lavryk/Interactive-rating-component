import React from "react";
import "./Thanks.styles.css";

export const Thanks = ({ rate, rateMax }) => {
  return (
    <div className="thanks-wrapper">
      <p className="selected-rating">
        You selected {rate} out of {rateMax}
      </p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
};
