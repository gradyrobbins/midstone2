import React, { Component } from 'react'
import { Link } from "react-router-dom"

class JokeList extends Component{

    render() {
        return (<React.Fragment>
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
                                    <Link className="nav-link" to={`/jokes/${joke.id}`}>Details</Link>
                                <a 
                                    onClick={() => this.props.deleteJoke(joke.id)}
                                    className="card-link">Delete this joke</a>
                            </h5>
                            
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}


export default JokeList;