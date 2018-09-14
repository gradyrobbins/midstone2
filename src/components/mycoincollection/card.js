import React, { Component } from 'react'
import NavBar from '../nav/NavBar';

export default class Card  extends Component {
    render() {
        
        console.log("card.js component")

        return (
            <div>
                <NavBar />
                <article className="UserList">
                        
                        Map over array of objects then return:
                        <br/>
                        <br/>
                        <br/>
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