import React, { Component } from 'react'
import NavBar from '../nav/NavBar';
import DataManager from './../../modules/DataManager'
export default class Mycoins  extends Component {


componentDidMount() {
    
const currentUser = JSON.parse(localStorage.getItem("credentials"))

DataManager.getAllUserData("quarter", currentUser.id)
    .then(specificUser => this.setState({specificUser : specificUser}))
    
}



state = {
    specificUser:[],
};
   


    render() {
        const currentUser = JSON.parse(localStorage.getItem("credentials"))
        // console.log("this.state.specificUser's collection = ", this.state.specificUser)    
        // console.log("this.state.specificUser's collection[0] = ", this.state.specificUser[0])    
        // console.log("this.state.specificUser's collection[0].state_id = ", this.state.specificUser[0].state_id)    
        // console.log("this.state.specificUser's collection[1] = ", this.state.specificUser[1])    
        // console.log("this.state.specificUser's collection[1].state_id = ", this.state.specificUser[1].state_id)    
        // console.log("this.props.states[state_id = 49] = ", this.props.states[49])    
        // console.log("this.props.states.state_id =", this.props.states.state_id)
        // const xxx = this.state.specificUser.map(e =>  this.props.states.find(state => state.state_id === e.state_id) ) || {} 
        // console.log("mycoins.js component. props.users =" , this.props.users , "props.quarters =", this.props.quarters)
        // console.log(currentUser);
        

//function to extract the state_id property for later use
function getstateID(item) {
    var bloop = item.state_id;
    return bloop ;
}

//function to extract the state's name property out of an object
function getstatename(item) {
    var statename = item.name;
    return statename ;
}

//map over the current/specific user's collection and return an array[] of their collection.
const myStateIDs = this.state.specificUser.map(getstateID) || {} 
console.log("my own collection's state_id's" , myStateIDs)
   
//map over the entire list of states/territories and return an array [] of state_id's
const allStateIDs = this.props.states.map(getstateID) || {}
console.log("entire USA state_id's", allStateIDs)    


function compare(arr1,arr2){
const matches =[];
  
    arr1.forEach((e1)=>arr2.forEach((e2)=>
        {if (e1 === e2){matches.push(e1)}}
                                            ));
    return matches;
}

let matchedStateIDs = compare(myStateIDs, allStateIDs);
console.log("matched state_id's: ", matchedStateIDs)


let xxx = matchedStateIDs.map(e =>  this.props.states.find(state => state.state_id === e) ) || {} 


var missingStateIDs = allStateIDs.filter( function(n) { return !this.has(n) }, new Set(myStateIDs) );
console.log("missing :" , missingStateIDs);
let yyy = missingStateIDs.map(e =>  this.props.states.find(state => state.state_id === e) ) || {} 

// specific user is in state.  
// find function which matches specificuser.state_id === this.props.states.state_id; then return an {} .  should be able to map over this onto cards.

        return (
            <div>
                <NavBar />
               
                Hello, {currentUser.username}, here are your quarters: 

                <section>
                    {xxx.map(taco => 
                    
                    {
                        // console.log("taco =" , taco)
                        return <div className="Card" key={taco.state_id}>
                                    
                                    State name: {taco.name}
                                </div>
                            }
                            
                            )
                    }
              
                </section>

            </div>
        );
    }
}
