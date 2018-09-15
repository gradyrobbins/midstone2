import React, { Component } from 'react'
import "./Card.css"

class Card extends Component {
    render() {
        return (
            <section className="everything">
            {
                this.props.everything.map(everything=>
                    <div className="Card" key={everything.state_id}>
                       Name: {everything.name} <br/>
                       Date of Statehood: {everything.dateOfStatehood} <br/>
                       Capital: {everything.capital} <br/>
                       Nicknames: {everything.nicknames} <br/>
                       Motto: {everything.motto} <br/>
                       Flower: {everything.flower} <br/>
                       Bird: {everything.bird} <br/>
                       
                    </div>
                )
            }
            </section>
        )
    }
}

export default Card