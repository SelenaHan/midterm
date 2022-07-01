import React from 'react'
import StudentCard from './StudentCard'
import './Student.css';
import s1 from '../s1.png'
import s2 from '../s2.png'
import s3 from '../s3.png'
import s4 from '../s4.png'
function Students() {
    const students = [
        {
            image: 's1.png',
            name: 'Mike',
            gpa: 3.8
        },
        {
            image: 's2.png',
            name: 'Manal',
            gpa: 3.6
        },
        {
            image: 's3.png',
            name: 'Moe',
            gpa: 3.2
        },
        {
            image: 's4.png',
            name: 'Mary',
            gpa: 2.6
        }
        
    ]
   
    return(
        <div className='flexbox'>
            <div className='cardItem'><StudentCard img={s1} name={students[0].name} gpa = {students[0].gpa} /></div>
            <div className='cardItem'><StudentCard img={s2} name={students[1].name} gpa = {students[1].gpa} /></div>
            <div className='cardItem'><StudentCard img={s3} name={students[2].name} gpa = {students[2].gpa} /></div>
            <div className='cardItem'><StudentCard img={s4} name={students[3].name} gpa = {students[3].gpa} /></div>
        </div>
    )
 
}

export default Students