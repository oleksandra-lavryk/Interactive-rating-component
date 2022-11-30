import React from "react";
import { useState } from "react";
import "./Card.styles.css";
import { RadioButton } from "../RadioButton/RadioButton.component";

export const Card = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  function handleRadioButton(e) {
    console.log(e.target.value);
    setSelectedRating(e.target.value);
  }

  return (
    <div className="card-container">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-wrapper">
        <RadioButton
          value={1}
          label={1}
          rating={selectedRating}
          handleOnChange={handleRadioButton}
        />
        <RadioButton
          value={2}
          label={2}
          rating={selectedRating}
          handleOnChange={handleRadioButton}
        />
        <RadioButton
          value={3}
          label={3}
          rating={selectedRating}
          handleOnChange={handleRadioButton}
        />
        <RadioButton
          value={4}
          label={4}
          rating={selectedRating}
          handleOnChange={handleRadioButton}
        />
        <RadioButton
          value={5}
          label={5}
          rating={selectedRating}
          handleOnChange={handleRadioButton}
        />
      </div>
      <button className="submit-rating-button">Submit</button>
    </div>
  );
};
