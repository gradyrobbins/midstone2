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
        console.log("this.state.specificUser's collection = ", this.state.specificUser)    
        // console.log("this.props.states[state_id = 49] = ", this.props.states[49])    
        console.log("this.props.states = ", this.props.states)    
        // const bloop = this.state.specificUser.map(e => e.state_id === this.props.states.state_id) || {}
        // console.log("bloop = ", bloop)
        // console.log("this.props.states.map()", )
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        // console.log("mycoins.js component. props.users =" , this.props.users , "props.quarters =", this.props.quarters)
        // console.log(currentUser);

// specific user is in state.  
// find function which matches specificuser.state_id === this.props.states.state_id; then return an {} .  should be able to map over this onto cards.
        return (
            <div>
                <NavBar />
               
                Hello, {currentUser.username}, here are your quarters: 

                <section>add a quarter  <button>*inoperative* button</button></section>

                <section>
                    {this.state.specificUser.map(taco => {
                        // console.log("taco =" , taco)
                        return <div className="Card" key={taco.quarter_id}>
                                    {/* Quarter_id: {taco.quarter_id} <br/> */}
                                    State_id: {taco.state_id} <br/>
                                    name: {taco.name}
                                
                                    <button>*inoperative* delete this quarter</button>
                                    </div>
                            })
                    }
              
                </section>

            </div>
        );
    }
}
