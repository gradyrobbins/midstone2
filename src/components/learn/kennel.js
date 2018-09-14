import React, { Component } from "react"

import LocationList from "./LocationList"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
   

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { state_id: 1, name: "Delaware", dateOfStatehood: "December 7, 1787", capital: "Dover" },
        { state_id: 2, name: "Pennsylvania", dateOfStatehood: "December 12, 1787", capital: "Harrisburg" }
        
        
    ]

    state = {
       
        locations: this.locationsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
               
            </article>
        )
    }
}

export default Kennel
                