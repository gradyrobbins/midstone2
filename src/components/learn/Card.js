import React, { Component } from 'react'


class Card extends Component {
    render() {
        return (
            <section className="everything">
            {
                this.props.everything.map(everything=>
                    <div key={everything.state_id}>
                       name: {everything.name} <br/>
                       date of statehood: {everything.dateOfStatehood} <br/>
                       capital: {everything.capital} <br/>
                       nicknames: {everything.nicknames} <br/>
                       motto: {everything.motto} <br/>
                       flower: {everything.flower} <br/>
                       bird: {everything.bird} <br/>
                       lorem: ipsum <br/><br/>
                    </div>
                )
            }
            </section>
        )
    }
}

export default Card