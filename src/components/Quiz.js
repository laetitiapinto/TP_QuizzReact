import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FaTrash, FaPen } from 'react-icons/fa';
import '../assets/styles/QuestionCard.css'

export default function Quiz() {
    const [quiz, setQuiz] = useState([])
    const [affichage, setAffichage] = useState(false)

    const recup = async () => {
        await axios.get(`http://localhost:8000/question`)
            .then(res => {
                console.log(res)
                setQuiz(res.data)
                setAffichage(true)
            })
    }

    useEffect(() => {
        recup()
    }, [])

    return (
        <div className='body'>
            <h2> Les questions </h2>
            <div className="box">
                {affichage ?
                    quiz.map(question => (
                        <div key={`question-${question.id}`}>
                            <div className='box-title' >
                                Question n° {question.id}  {question.theme}
                            </div>
                            <div className='box-body'>
                                {question.question}
                                <br />
                                {question.reponse}
                            </div>
                            <div className='box-footer'>
                                <Link to={'/edit/' + question.id}><FaPen /></Link>
                                <Link to={'/suppression/'+ question.id}><FaTrash /></Link>
                            </div>
                        </div>
                    ))
                    : <p>Chargement...</p>
                }
            </div>
        </div>
    )
}