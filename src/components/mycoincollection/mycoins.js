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
        console.log("this.state.specificUser = ", this.state.specificUser)    
        console.log("this.props.states[state_id = 49] = ", this.props.states[49])    
        // const bloop = this.props.states.map(e => e.state_id === this.state.specificUser.state_id) || {}
        // console.log("bloop = ", bloop)
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        // console.log("mycoins.js component. props.users =" , this.props.users , "props.quarters =", this.props.quarters)
        // console.log(currentUser);

// specific user is in state.  
// find function which matches specificuser.state_id === this.props.states.state_id; then return an {} .  should be able to map over this onto cards.
        return (
            <div>
                <NavBar />
               
                "Hello, {currentUser.username}, here are your quarters: " 

                <section>
                    {this.state.specificUser.map(item => {
                        console.log("a" , item)
                        return <div className="Card" key={item.quarter_id}>
                                    {/* Quarter_id: {item.quarter_id} <br/> */}
                                    State_id: {item.state_id} <br/>
                                
                                
                                    </div>
                            })
                    }
              
                </section>
                <section>add a quarter with this <button>button</button></section>

            </div>
        );
    }
}
