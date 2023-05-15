import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Card.css";
import RatingSystem from "./RatingSystem";

const Card = (props) => {
  return (
    <div className="card" id={props.id}>
      <div className="card__dark-bg">
        <div className="card__image-container">
          <img src={props.photoUrl} className="card__photo" alt="teacher image"/>
        </div>
      </div>
      <div className="card__content">
        <Link to={`/teacher/${props.id}`}>
          <h2 className="card__name">{props.name}</h2>
        </Link>

        <div className="card__rating">
          <RatingSystem id={props.id} />
        </div>
      </div>
    </div>
  );
};


export default Card;
