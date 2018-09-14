import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.state_id}>
                       name: {location.name} <br/>
                       date of statehood: {location.dateOfStatehood} <br/>
                       capital: {location.capital} <br/>
                       lorem: ipsum <br/><br/>
                    </div>
                )
            }
            </section>
        )
    }
}

export default LocationList