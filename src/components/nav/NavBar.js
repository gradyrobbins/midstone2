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
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/list">Fun facts for all 50 States and 6 territories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/mycoincollection">My Coin Collection</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/users">View other's collections</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/jokes">Add routed via /jokes </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/states/new">Add routed via states/new</Link>
                    </li>
                    
                    
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