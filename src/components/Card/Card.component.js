import React from "react";
import "./Card.styles.css";

export const Card = () => {
  return (
    <div className="card-container">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <button className="submit-rating-button">Submit</button>
    </div>
  );
};
