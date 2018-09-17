import React, { Component } from 'react'
import "./../learn/bloop.css"
import Card from './../learn/Card'

class User extends Component {
    render() {
        return (
            <div>
                <section className="something">
            {
                this.props.something.map(something=>
                    <div className="Card" key={something.id}>
                       Name: {something.name} <br/>
                       UserName: {something.userName} <br/>
                       Email: {something.email} <br/>
                      
                    </div>
                )
            }
            </section>
            </div>
        )
    }
}

export default User