import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TeachersContext } from "../Context/TeachersContext";
import "../styles/Teacher.css";
import { database } from "../firebase";
import { onValue, push, ref } from "firebase/database";

function Teacher() {
  const { id } = useParams();

  const { teachersList } = useContext(TeachersContext);
  const teacher = teachersList.find((teacher) => teacher.id === Number(id));

  const { updateTeacherRating } = useContext(TeachersContext);
  const handleRatingChange = (e) => {
    const newRating = Number(e.target.value);
    updateTeacherRating(teacher.id, newRating);
  };

  const [commentInput, setCommentInput] = React.useState("")
  const commentsInDB = ref(database, `teachers/teacher_${teacher.id}/comments`)

  function handleCommentChange(event) {
      setCommentInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (commentInput != "") {
      push(commentsInDB, commentInput)
    } else {
      alert("Please write valid review")
    }
    setCommentInput("")
  }

  const [commentsArray, setCommentsArray] = useState([''])

  useEffect(() => {
    onValue(commentsInDB, (snapshot) => {
      if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        setCommentsArray(itemsArray.map(array => {
          return <li key={array[0]}>{array[1]} <span>{array[0]}</span></li>
        }))
      } else {
        console.log("Snapshot does not exist")
      }
    })
  }, [])


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
      <form onSubmit={handleSubmit} style={{ "width": "100%", "marginTop": "1em" }}>
        <label htmlFor="comment" style={{ "marginRight": "1em" }}>Leave a comment:</label>
        <input type="text" name="comment" value={commentInput} onChange={handleCommentChange} id="input-field" />
        <button type="submit" id="submitComment">Submit</button>
      </form>
      <div className="teacher__reviews">
        <span className="teacher__reviews-text">Reviews:</span>
        <ul id="teacher__reviews">{commentsArray}</ul>
      </div>
    </div>
  );
}

export default Teacher;
