import React, { Component } from "react"
import NavBar from "./components/nav/NavBar"
import Header from "./Header"
import ApplicationViews from "./ApplicationViews"

import "bootstrap/dist/css/bootstrap.min.css"


class Midstone extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Header />
                <ApplicationViews />
                <h3>test</h3>
            </React.Fragment>
        )
    }
}


export default Midstone