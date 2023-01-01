import React from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";
import logo from './logo.png';
import { HashLink as Link } from "react-router-hash-link";


function Menu (){

    return <Router>
        <nav> 
        <img className="logotip" src={logo} width="50px" height="50px" alt="logo"/>
            <Link smooth to="/#home" className="Link">Главная</Link>
            <Link smooth to="/#avia" className="Link">Что такое авиатренажер?</Link>
            <Link smooth to="/#where" className="Link">Куда можно лететь?</Link>
            <Link smooth to="/#price" className="Link">Цены</Link>
            <Link smooth to="/#reviews" className="Link">Отзывы</Link>
            <Link smooth to="/#instructors" className="Link">Инструктора</Link>
            <Link smooth to="/#contact" className="Link">Контакты</Link>
           
        </nav>

     
    
    </Router>
}

export default Menu;