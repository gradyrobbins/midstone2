import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css'


class NavBar extends Component {


    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/jokes">Jokes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/events">Events</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link"
                        to="/friends">Friends</Link>
                    </li> */}
                </ul>
                <button onClick={() => {
                    localStorage.clear("credentials")
                    document.location.href='http://localhost:3000'
                }}
                    className="logoutButton">Logout</button>
            </nav>
        )
    }
}

export default NavBar