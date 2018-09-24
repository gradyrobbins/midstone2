import React, { Component } from 'react'
import NavBar from '../nav/NavBar';
import DataManager from './../../modules/DataManager'
export default class Mycoins  extends Component {

state = {
    specificUser:[]
};
componentDidMount() {
    
const currentUser = JSON.parse(localStorage.getItem("credentials"))

DataManager.getAllUserData("quarter", currentUser.id)
    .then(specificUser => this.setState({specificUser : specificUser}))
    
}



    render() {
        console.log("this.state.specificUser's quarters", this.state.specificUser)        
        // console.log("mycoins.js component. props.users =" , this.props.users , "props.quarters =", this.props.quarters)
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        // console.log(currentUser);

// specific user is in state.  find function which matches specificuser.state_id === state.id; then return an {} .  should be able to map over this onto cards.
// const bloop = this.props.states.find(e => e.id === this.state.specificUser.state_id) || {}
// console.log(bloop)
        return (
            <div>
                <NavBar />
               
                "Hello, {currentUser.username}, here are your quarters: " 
                
                <section>
                    {this.state.specificUser.map(item => {
                        // console.log(item)
                        return <div className="Card" key={item.quarter_id}>
                                    Quarter_id: {item.quarter_id} <br/>
                                    State_id: {item.state_id} <br/>
                                
                                
                                    </div>
                            })
                    }
              
                </section>


            </div>
        );
    }
}
