import React from 'react'
import Card from 'react-bootstrap/Card';

import './Student.css';

function StudentCard(props) {
  return (
    <Card>
      <Card.Img src={props.img} />
      <Card.Body>
        <Card.Title><h3>{props.name}</h3></Card.Title>
        <Card.Text>{props.gpa}</Card.Text>
        <button className='myButton' type='submit'>Grade</button>
      </Card.Body>
    </Card>
  )
}

export default StudentCard
