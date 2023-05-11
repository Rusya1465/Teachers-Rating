import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Card.css";
import RatingSystem from "./RatingSystem";

const Card = (props) => {
  return (
    <div className="card" id={props.id}>
      <img src={props.photoUrl} className="card__photo" />
      <div className="card__content">
        <Link to={`/teacher/${props.id}`}>
          <h2 className="card__name">{props.name}</h2>
        </Link>

        <div className="card__rating">
          <RatingSystem />
        </div>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   photoUrl: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

export default Card;
