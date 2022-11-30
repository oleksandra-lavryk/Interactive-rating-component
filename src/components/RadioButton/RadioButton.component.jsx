import React from "react";
import "./RadioButton.styles.css";

export const RadioButton = ({ label, value, rating, handleOnChange }) => {
  return (
    <div className={`rating-item ${rating == value ? "selected" : ""}`}>
      <input
        id={value}
        name="rating"
        type="radio"
        value={value}
        onChange={handleOnChange}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};
