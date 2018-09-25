import React, { Component } from 'react'
import NavBar from '../nav/NavBar';
import DataManager from './../../modules/DataManager'
export default class Mycoins  extends Component {

state = {
    specificUser:[],
};

componentDidMount() {
    
const currentUser = JSON.parse(localStorage.getItem("credentials"))

DataManager.getAllUserData("quarter", currentUser.id)
    .then(specificUser => this.setState({specificUser : specificUser}))
    
}



    render() {
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        console.log("this.state.specificUser's collection = ", this.state.specificUser)    
        console.log("this.state.specificUser's collection[0] = ", this.state.specificUser[0])    
        // console.log("this.state.specificUser's collection[0].state_id = ", this.state.specificUser[0].state_id)    
        console.log("this.state.specificUser's collection[1] = ", this.state.specificUser[1])    
        // console.log("this.state.specificUser's collection[1].state_id = ", this.state.specificUser[1].state_id)    
        // console.log("this.props.states[state_id = 49] = ", this.props.states[49])    
        // console.log("this.props.states.state_id =", this.props.states.state_id)
        // console.log("this.props.states = ", this.props.states)    
        // const bloop = this.state.specificUser.map(e =>  this.props.states.find(state => state.state_id === e.state_id) ) || {} 
        // console.log("bloop = ", bloop)
        // console.log("mycoins.js component. props.users =" , this.props.users , "props.quarters =", this.props.quarters)
        // console.log(currentUser);

// specific user is in state.  
// find function which matches specificuser.state_id === this.props.states.state_id; then return an {} .  should be able to map over this onto cards.
        return (
            <div>
                <NavBar />
               
                Hello, {currentUser.username}, here are your quarters: 

                <section>add a quarter  </section>

                <section>
                    {this.state.specificUser.map(taco => 
                    
                    {
                        // console.log("taco =" , taco)
                        return <div className="Card" key={taco.quarter_id}>
                                    Quarter_id: {taco.quarter_id} <br/>
                                    State_id: {taco.state_id} <br/>
                                </div>
                            }
                            
                            )
                    }
              
                </section>

            </div>
        );
    }
}
