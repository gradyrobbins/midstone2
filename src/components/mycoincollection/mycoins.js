import React, { Component } from 'react'
import NavBar from '../nav/NavBar';
import DataManager from './../../modules/DataManager'
import "bootstrap/dist/css/bootstrap.min.css"

export default class Mycoins  extends Component {

componentDidMount() {
    
    const currentUser = JSON.parse(localStorage.getItem("credentials"))

    DataManager.getAllUserData("quarter", currentUser.id)
        .then(thisusersquarters => this.setState({thisusersquarters : thisusersquarters}))
}

state = {
    thisusersquarters:[],
};
   
render() {
    const currentUser = JSON.parse(localStorage.getItem("credentials"))
        // console.log("this.state.thisusersquarters's collection = ", this.state.thisusersquarters)    
        // console.log("this.state.thisusersquarters's collection[0] = ", this.state.thisusersquarters[0])    
        // console.log("this.state.thisusersquarters's collection[0].state_id = ", this.state.thisusersquarters[0].state_id)    
        // console.log("this.state.thisusersquarters's collection[1] = ", this.state.thisusersquarters[1])    
        // console.log("this.state.thisusersquarters's collection[1].state_id = ", this.state.thisusersquarters[1].state_id)    
        // console.log("this.props.states[state_id = 49] = ", this.props.states[49])    
        // console.log("this.props.states.state_id =", this.props.states.state_id)
        // const xxx = this.state.thisusersquarters.map(e =>  this.props.states.find(state => state.state_id === e.state_id) ) || {} 
        // console.log("mycoins.js component. props.users =" , this.props.users , "props.quarters =", this.props.quarters)
        // console.log(currentUser);
        

    //function to extract the state_id property from inside the array of objects for later use
    function getstateID(item) {
        var bloop = item.state_id;
        return bloop ;
    }

//function to extract the state's name property out of an object
// function getstatename(item) {
//     var statename = item.name;
//     return statename ;
// }

//map over the current/specific user's collection and return an array[] of their collection.
const myStateIDs = this.state.thisusersquarters.map(getstateID) || {} 
// console.log("my own collection's state_id's" , myStateIDs)
   
//map over the entire list of states/territories and return an array [] of state_id's
const allStateIDs = this.props.states.map(getstateID) || {}
// console.log("entire USA state_id's", allStateIDs)    

//this function is built to compare the user's array of stateIDs against the master list of USA stateIDs
function compare(arr1,arr2){
    const matches =[];
  
    arr1.forEach((e1)=>arr2.forEach((e2)=>
        {if (e1 === e2){matches.push(e1)}}
                                            ));
    return matches;
}

//here is where i invoke compare()  as defined above
let matchedStateIDs = compare(myStateIDs, allStateIDs);
// console.log("matched state_id's: ", matchedStateIDs)

//this maps over the matched ID's and link them to === state_id's in the master list which was passed in via props
let gotem = matchedStateIDs.map(e =>  this.props.states.find(state => state.state_id === e) ) || {} 

//the below function was based on: https://stackoverflow.com/questions/40537972/compare-2-arrays-and-show-unmatched-elements-from-array-1
var missingStateIDs = allStateIDs.filter( function(n) { return !this.has(n) }, new Set(myStateIDs) );
// console.log("missing :" , missingStateIDs);
let needem = missingStateIDs.map(e =>  this.props.states.find(state => state.state_id === e) ) || {} 


// return:  map the "got 'em[] " array over card, map the "need 'em []" array over card; render to DOM

        return (
            <div>
                <NavBar />
                    <div className="container">
                
                    Hello, {currentUser.username}, here is the status of your quarter collection: 
                    <div className="row">
                    <section className="col">
                        {gotem.map(taco => 
                        {
                            // console.log("taco =" , taco)
                            return <div className="Card" key={taco.state_id}>
                                        I have : {taco.name}
                                    </div>
                                }
                                )
                        }
                    </section>

                    <section className="col">
                        {needem.map(taco => 
                        {
                            // console.log("taco =" , taco)
                            return <div className="Card" key={taco.state_id}>
                                        I need :  {taco.name}
                                    </div>
                                }
                                )
                        }
                    </section>
                    </div>
                </div>
            </div>
        );
    }
}
