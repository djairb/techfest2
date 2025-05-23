import { useContext, useRef, useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

import { UserContext } from "../../context/UserContext";

import "./Navbar.css"

import logo from "../../img/techfest_logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){


    

    //user ta setado como padrão

    const navigate = useNavigate();

    const navRef = useRef();

    const showNavBar = () => {

        navRef.current.classList.toggle("responsive_nav");
    }

    

    return (

        <header>           

            <Link to="/"><img  src={logo} alt="logo-techFest" /></Link>
             <nav ref={navRef}>

             <Link to="/oficina-all">Minicursos/Palestras</Link>

             <Link to="/all-stands">Exposições</Link>

             <Link to="/campeonato-all">Campeonatos</Link>

             <Link to="/palco-all">Apresentações</Link>

                {/* <Link to="/tela-todos-palestra">Palestras</Link>

                <Link to="/tela-todos-oficina">Oficinas</Link>

                <Link to="/tela-todos-stands">Stands</Link>

                <Link to="/tela-todos-game">Disputas de Games</Link>

                <Link to="/tela-todos-apresentacao">Apresentações Culturais</Link>

                <Link to="/tela-todos-show">Shows</Link>                */}

                
        
                <button className= "nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>                
                </button>          

             </nav>
             <button className= "nav-btn" onClick={showNavBar}>
                <FaBars/>                
            </button>     



        </header>
    );
}

export default Navbar;