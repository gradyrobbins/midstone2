import React, { Component } from "react"
import NavBar from "./components/nav/NavBar"

import ApplicationViews from "./ApplicationViews"
import Test from "./test"
import "bootstrap/dist/css/bootstrap.min.css"


class Midstone extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
               
                <ApplicationViews />
                <h3>test</h3>
                <Test />
            </React.Fragment>
        )
    }
}


export default Midstone