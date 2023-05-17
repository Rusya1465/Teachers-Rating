import React from 'react'
import { database } from '../firebase'
import { onValue, push, ref } from "firebase/database";

function TestComponent() {

    const teachersInDB = ref(database, "teachers")
    // const commentsInDB = ref(database, "teachers/teacher_2/comments")
    onValue(teachersInDB, (snapshot) => {
      const data = snapshot.val()
      console.log(snapshot.val())
    //   console.log(data)
    //   console.log(Object.entries(data))
    })

    // function PushToDB() {
    //     push(commentsInDB, "example comment")
    // }

  return (
    <div>
        <h1>TEST</h1>
        {/* <button onClick={PushToDB}>Push to database</button> */}
        <button>Push to database</button>
    </div>
  )
}

export default TestComponent