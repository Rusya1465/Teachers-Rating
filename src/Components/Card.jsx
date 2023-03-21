import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Card = ({ id, name, photoUrl, rating }) => {
  const starRating = [...Array(5)].map((_, i) => (
    <FaStar key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} />
  ));

  return (
    <div className="card" id={id}>
      <img src={photoUrl} alt={name} className="card__photo" />
      <div className="card__content">
        <h2 className="card__name">{name}</h2>
        <div className="card__rating">{starRating}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Card;
