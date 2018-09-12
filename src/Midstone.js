import React, { Component } from "react"
import App from './App';
import ApplicationViews from "./ApplicationViews"

class Midstone extends Component {
    render() {
        return (
            <React.Fragment>
                <App />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Midstone