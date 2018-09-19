import React, { Component } from 'react'
import NavBar from '../nav/NavBar';
import DataManager from './../../modules/DataManager'

export default class Mycoins  extends Component {

//call- NPM JSON server docs get items according to userid so that call only pulls for this user
state = [];
componentDidMount() {
    
const currentUser = JSON.parse(localStorage.getItem("credentials"))
  DataManager.getAllUserData("quarter", currentUser.id)
  .then(allUsers => {
    this.setState(allUsers)
  })
}

    render() {
        console.log("state", this.state)        
        console.log("mycoins.js component. props.users =" , this.props.users , "props.quarters =", this.props.quarters)
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        console.log(currentUser);
        return (
            <div>
                <NavBar />
                "Hello, {currentUser.username}, here are your quarters: " 
                
                <section>
                    {this.props.quarters.filter(quarter => quarter.user_id === 2).map(item => {
                        // console.log(quarter)
                        return <div className="Card" key={item.quarter_id}>
                                quarter id#: {item.quarter_id} <br/>
                                state id: {item.state_id}
                                </div>
                            })
                    }
                </section>

            </div>
        );
    }
}
