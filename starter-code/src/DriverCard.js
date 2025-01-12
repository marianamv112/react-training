import React from "react";
import Rating from "./Rating";
import "./DriverCard.css";

function DriverCard(props) {
  return (
    <div className="driverCard">
      <img src={props.img} />
      <div>
        <h1>{props.name}</h1>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
