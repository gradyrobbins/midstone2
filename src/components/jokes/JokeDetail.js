import React, { Component } from "react"
// import JokeEditForm from '.jokes/JokeEditForm'

export default class JokeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the joke that the
            user clicked on by looking at the `this.props.jokes`
            collection that was passed down from ApplicationViews
        */
        const joke = this.props.jokes.find(a => a.id === parseInt(this.props.match.params.jokeId, 0)) || {}

        return (
            <section className="joke">
                <div key={joke.id} className="detail-card">
                    <div className="card-body">
                        
                        <h6 className="card-title">{joke.setup}</h6>
                        <br/>
                        <h6>{joke.punchline} </h6>
                       
                        <a
                            onClick={() => this.props.deleteJoke(joke.id)
                                            .then(() => this.props.history.push("/jokes"))}
                            className="card-link">Delete</a>
                            <br/>
                            <a
                            onClick={() => this.props.history.push(`/jokes/edit/${joke.id}`)}
                            className="card-link">Edit</a>
                    </div>
                </div>
            </section>
        )
    }
}