// import React, { useState } from 'react';
// import { db } from './firebase';

// export default function CommentForm(props) {
//   const [comment, setComment] = useState('');

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     db.collection('comments').add({
//       text: comment,
//       createdAt: new Date(),
//     });

//     setComment('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="comment">Leave a comment:</label>
//       <textarea
//         id="comment"
//         name="comment"
//         value={comment}
//         onChange={handleCommentChange}
//       ></textarea>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }