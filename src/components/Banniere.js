import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import '../assets/styles/Banniere.css'

export default function Banniere() {
    return (
        <div className='banniere'>
            <Link to="/" ><img src={Logo} className="img_logo" alt="logo"/></Link>
            <ul className="nav_links">
                <li>
                    <Link className='ajout_link' to="/ajout">Ajouter une question</Link>
                </li>
            </ul>
        </div >
    )
}
