import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TeachersContext } from "../Context/TeachersContext";
import "../styles/Teacher.css";

function Teacher() {
  const { id } = useParams();

  const { teachersList } = useContext(TeachersContext);
  const teacher = teachersList.find((teacher) => teacher.id === Number(id));

  const { updateTeacherRating } = useContext(TeachersContext);
  const handleRatingChange = (e) => {
    const newRating = Number(e.target.value);
    updateTeacherRating(teacher.id, newRating);
  };

  return (
    <div className="teacher">
      <img
        className="teacher__image"
        src={teacher.photoUrl}
        alt={teacher.name}
      />
      <div className="teacher__info">
        <h1 className="teacher__name">{teacher.name}</h1>
        <p className="teacher__description">{teacher.description}</p>
        <div className="teacher__rating">
          <span className="teacher__rating-text">Rating:</span>
          <span className="teacher__rating-value">{teacher.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
