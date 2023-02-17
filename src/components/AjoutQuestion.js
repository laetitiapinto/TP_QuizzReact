import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../assets/styles/Formulaire.css'
import { useNavigate } from "react-router-dom";


export default function AjoutQuestion() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [theme, setTheme] = useState("")
    const [question, setQuestion] = useState("")
    const [reponse, setReponse] = useState("")


    const ajoutQuestion = async () => {
        await axios.post(`http://localhost:8000/question`, {
            theme: theme,
            question: question,
            reponse: reponse
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Ajout réussi")
                    navigate("/");
                }
                else {
                    alert("Erreur d'ajout")
                }
            })
    }

    return (
        <div className='container'>
            <h2> Ajouter une question</h2>

            <form onSubmit={handleSubmit(ajoutQuestion)}>
                <label>Thème </label>
                <input {...register("theme", { required: true })} onChange={(e) => setTheme(e.target.value)} />

                <label>Question </label>
                <input {...register("question", { required: true })} onChange={(e) => setQuestion(e.target.value)} />

                <label>Réponse </label>
                <input {...register("reponse", { required: true })} onChange={(e) => setReponse(e.target.value)} />

                {(errors.theme || errors.question || errors.reponse) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    )
}
