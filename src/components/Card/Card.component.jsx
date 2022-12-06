import React from "react";
import { useState } from "react";
import "./Card.styles.css";
import { RadioButton } from "../RadioButton/RadioButton.component";
import { Image } from "../Image/Image.component";
import { Thanks } from "../Thanks/Thanks.component";

export const Card = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isRate, setIsRate] = useState(false);
  const ratingData = [1, 2, 3, 4, 5];

  function handleRadioButton(e) {
    setSelectedRating(e.target.value);
  }

  function submitRating() {
    if (selectedRating !== 0) {
      setIsRate(true);
    }
  }

  return (
    <div className="card-container">
      <Image isRate={isRate} />
      {isRate ? (
        <Thanks
          rate={selectedRating}
          rateMax={ratingData[ratingData.length - 1]}
        />
      ) : (
        <>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating-wrapper">
            {ratingData.map((item) => (
              <RadioButton
                value={item}
                label={item}
                key={item}
                rating={selectedRating}
                handleOnChange={handleRadioButton}
              />
            ))}
          </div>
          <button className="submit-rating-button" onClick={submitRating}>
            Submit
          </button>
        </>
      )}
    </div>
  );
};
