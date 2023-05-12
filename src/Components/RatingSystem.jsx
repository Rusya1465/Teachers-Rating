import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { TeachersContext } from "../Context/TeachersContext";

function RatingSystem(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { teachers, updateTeacherRating } = useContext(TeachersContext);
  const handleRatingChange = (event) => {
    const teacherId = props.id;
    const newRating = parseInt(event.target.value);
    setRating(newRating);
    updateTeacherRating(teacherId, newRating);
  };

  return (
    <div className="rating-system">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name={`rating-${props.teacherId}`}
              value={currentRating}
              onClick={(event) => handleRatingChange(event)}
            />
            <FaStar
              className="star"
              size={20}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Рейтинг учителя {rating}</p>
    </div>
  );
}

export default RatingSystem;
