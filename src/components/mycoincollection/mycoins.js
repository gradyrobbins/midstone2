import React, { Component } from 'react'
import NavBar from '../nav/NavBar';
import DataManager from './../../modules/DataManager'
export default class Mycoins  extends Component {
    
    state = {
        specificUser:[],
        state:[],
        findit:[],
    };
    
    lastminutefunction() {
        
        let newState= {
            
        }
        
        DataManager.getAll("state")
        .then(state => newState.state = state)
        
        .then(() => this.setState(newState))
        .then(()=>{
            let plainExercises = this.state.state
            this.state.specificUser.map(e => { const findit = plainExercises.find(function (taco) {
            //  console.log("taco " , taco.state_id);
            return taco.state_id === e.state_id})
        
        
            // console.log("this.state.state", this.state.state );
           
            console.log("findit :" , findit);
            // console.log("e.state_id", e.state_id);
            
        })
        
        }
        
        //  return console.log(newState)     
        )}
        
        componentDidMount() {
            
            const currentUser = JSON.parse(localStorage.getItem("credentials"))

DataManager.getAllUserData("quarter", currentUser.id)
.then(specificUser => this.setState({specificUser : specificUser}))

this.lastminutefunction()
}



render() {
    // console.log(lastminutefunction());
    // console.log("specific user: ", this.state.specificUser, "state: ", this.state.state)  
    // console.log("mycoins.js component. props.users =" , this.props.users , "props.quarters =", this.props.quarters)
    const currentUser = JSON.parse(localStorage.getItem("credentials"))
    // console.log(currentUser);

// specific user is in state.  find function which matches specificuser.state_id === state.id; then return an {} .  should be able to map over this onto cards.

// (e => e.state_id === this.state.specificUser.state_id) || {}
// console.log(bloop)




        return (
            <div>
                <NavBar />
               
                Hello, {currentUser.username}, here are your quarters: 
                <br/>

                <a href="/" className="card-link">Add a quarter to your collection</a>
            
                <section>
                {this.state.specificUser.map(item => {
                    // console.log(item)
                    return <div className="Card" key={item.quarter_id}>
                                State_id: {item.state_id} <br/>

                                <a href="/"
                                
                                className="card-link">Delete this quarter from your collection</a>
                                </div>
                        })
                }
              
                </section>

            </div>
        );
    }
}
