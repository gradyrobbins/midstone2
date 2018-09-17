import React, { Component } from 'react'
import NavBar from '../nav/NavBar';

export default class Mycoins  extends Component {
    render() {
        
        console.log("mycoins.js component.  this component needs:  users properties (props) of <app views /> and <card /> component", this.props.quarter, this.props.users)
        
        return (
            <div>
                <NavBar />
                
                {/* <article  className="UserList">
                    <h5>Import  card component to re-use </h5>
                    <h5>Import props.something from LIST and Mycoins/></h5>
                    <p>import from DB:  UserList </p>
                    <p>import from DB:  JSON/Quarter</p>

                    <p>Then execute FILTER/MAP function,  then  pass this information as props to the Card component which we are going to re-use to render/display MY COINS</p>
                // advice from SHU:  component did mount
                // fetch but on that route, filter by userid===currentuserid .then setState(), .then map()
                </article> */}
                <section className="">
                    {
                        this.props.users.map(user =>
                            <div key={user.id} className="card card--user">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        "User Name: {user.username}" <br/>
                                        "User id: {user.id}"<br/>
                                        "My coins:  Import joiner table...somehow"
                                    </h5>
                                </div>
                             </div>
                        )
                    }
               
               
                </section>
            </div>
        );
    }
}