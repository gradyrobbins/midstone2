import React, { Component } from 'react'
import "./Card.css"

class Card extends Component {
    render() {
        return (
            <section className="everything">
            {
                this.props.everything.map(everything=>
                    <div className="Card" key={everything.state_id}>
                       name: {everything.name} <br/>
                       date of statehood: {everything.dateOfStatehood} <br/>
                       capital: {everything.capital} <br/>
                       nicknames: {everything.nicknames} <br/>
                       motto: {everything.motto} <br/>
                       flower: {everything.flower} <br/>
                       bird: {everything.bird} <br/>
                       
                    </div>
                )
            }
            </section>
        )
    }
}

export default Card