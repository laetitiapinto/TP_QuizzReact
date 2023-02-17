import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function EditQuestion() {
    let { id } = useParams()

    const { handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [theme, setTheme] = useState("")
    const [question, setQuestion] = useState("")
    const [reponse, setReponse] = useState("")

    const recup = async () => {
        await axios.get(`http://localhost:8000/question/` + id)
            .then(res => {
                setTheme(res.data[0].theme)
                setQuestion(res.data[0].question)
                setReponse(res.data[0].reponse)
            })
    }

    const editQuestion = async () => {
        await axios.put(`http://localhost:8000/question/` + id, {
            theme: theme,
            question: question,
            reponse: reponse
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Envoie réussi")
                    navigate("/");
                }
                else {
                    alert("Erreur d'envoi")
                }
            })
    }
    
    useEffect(() => {
        recup()
    }, [])

    return (
        <div className='container'>
            <h2> Editer une question</h2>

            <form onSubmit={handleSubmit(editQuestion)}>
                <label>Thème </label>
                <input defaultValue={theme} onChange={(e) => setTheme(e.target.value)} />

                <label>Question </label>
                <input defaultValue={question} onChange={(e) => setQuestion(e.target.value)} />

                <label>Réponse </label>
                <input defaultValue={reponse} onChange={(e) => setReponse(e.target.value)} />

                {(errors.theme || errors.question || errors.reponse) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    )
}
