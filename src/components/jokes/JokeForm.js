import React, { Component } from "react"
import "../login/Login.css"
import NavBar from './../nav/NavBar'

export default class JokeForm extends Component {
    // Set initial state
    state = {
        setup: "",
        punchline: "",
        state_id: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating event object, and
        invoking the function reference passed from parent component
     */

     //setting default input conditions - throwing alert
    constructNewJoke = evt => {
        evt.preventDefault()
        if (this.state.setup === "" || this.state.punchline === "") {
            window.alert("Jokes need both a setup AND a punchline!")
        } else {
            const joke = {
                setup: this.state.setup,
                punchline: this.state.punchline,
                state_id: this.state.state_id


            }

            // Create the joke and redirect user to joke list
            this.props.addJoke(joke).then(() => this.props.history.push("/jokes"))
        }
    }

    render() {
        return (
            <div>
            <NavBar />
            <React.Fragment>
                <form className="jokeForm">
                    <div className="form-group">
                        <label htmlFor="jokeName">Add a new State to your collection</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="setup"
                            placeholder="select the new State" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">notes?</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="punchline"
                            placeholder="add more details here" />
                    </div>
                    <button type="submit" onClick={this.constructNewJoke}
                    className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
            </div>
        )
    }
}
