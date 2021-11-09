import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <Nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/geek" className="nav-link">Quiz Geek</Link>
                <Link to="/games" className="nav-link">Quiz Games</Link>
                <Link to="/magic" className="nav-link">Quiz Magia</Link>
                <Link to="/about" className="nav-link">Sobre el formulario</Link>
            </Nav>
        )
    }
}