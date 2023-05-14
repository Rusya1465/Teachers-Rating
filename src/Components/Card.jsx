import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = (props) => {
  const starRating = [...Array(5)].map((_, i) => (
    <FaStar key={i} color={i < props.rating ? "#ffc107" : "#e4e5e9"} />
  ));
  return (
    <div className="card" id={props.id}>
      <div className="card__dark-bg">
        <div className="card__image-container">
          <img src={props.photoUrl} className="card__photo" />
        </div>
      </div>
      <div className="card__content">
        <Link to={`/teacher/${props.id}`}>
          <h2 className="card__name">{props.name}</h2>
        </Link>

        <div className="card__rating">{starRating}</div>
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
