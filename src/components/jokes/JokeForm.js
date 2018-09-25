import React, { Component } from "react"
import "../login/Login.css"

export default class JokeForm extends Component {
    // Set initial state
    state = {
        setup: "",
        punchline: "",
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
            }

            // Create the joke and redirect user to joke list
            this.props.addJoke(joke).then(() => this.props.history.push("/jokes"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="jokeForm">
                    <div className="form-group">
                        <label htmlFor="jokeName">joke setup</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="setup"
                            placeholder="joke setup" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">punchline</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="punchline"
                            placeholder="what's the punchline?" />
                    </div>
                    <button type="submit" onClick={this.constructNewJoke}
                    className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
        )
    }
}
