import React from 'react'
import { useParams } from 'react-router-dom'
import teachers from "../../teachers";

function Teacher() {

    const {id} = useParams()

    let result = {}

    for (let i = 0; i < teachers.length; i++) {
        if (id == teachers[i].id) {
            result = teachers[i]
        }
    }

  return (
    <div className='teacher--page'>
        <img src={result.photoUrl} alt="" height='200px'/>
        <h1>{result.name}</h1>
        
    </div>
  )
}

export default Teacher