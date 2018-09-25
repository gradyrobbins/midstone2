import React, { Component } from 'react'
import { Link } from "react-router-dom"
import NavBar from './../nav/NavBar';
import DataManager from './../../modules/DataManager'
import "bootstrap/dist/css/bootstrap.min.css"
class JokeList extends Component{

    render() {
        return (
        <div>
        <NavBar />
        
        <React.Fragment>
            
            <div className="newJokeButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/jokes/new")}
                        }>
                    Click to add a new joke
                </button>
            </div>
            <section className="jokes">
            {
                this.props.jokes.map(joke =>
                    <div key={joke.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {joke.setup}<br/>
                                {joke.punchline}
                                    <Link className="nav-link" to={`/jokes/${joke.id}`}><button>Details</button></Link>
                                <a 
                                    onClick={() => this.props.deleteJoke(joke.id)}
                                    className="card-link"><button>Delete this joke</button></a>
                            </h5>
                            
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
            </div>
    )
}}


export default JokeList;