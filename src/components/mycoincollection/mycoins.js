import React, { Component } from 'react'
import NavBar from '../nav/NavBar';

export default class Mycoins  extends Component {
    render() {
        
        console.log("card.js component")

        return (
            <div>
                <NavBar />
                <article className="UserList">
                        
                        Map over data which creates
                        <br/>
                        a new array, 
                        <br/>
                        then return the array:  all cards with 
                        <br/>
                        <br/>
                        User ID:  1 "grady"

                        
                        State: Mississippi
                        Bird: lorem
                        Flower: Ipsum
                        
                        
                </article>

            </div>
        );
    }
}