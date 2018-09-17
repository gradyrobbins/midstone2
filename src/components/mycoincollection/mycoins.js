import React, { Component } from 'react'
import NavBar from '../nav/NavBar';
import Card from '../learn/Card'
import List from '../learn/List'
import User from '../mycoincollection/User'

export default class Mycoins  extends Component {
    render() {
        
        console.log("mycoins.js component", this.props.users)

        return (
            <div>
                <NavBar />
                
                <article className="UserList">
                    <h5>Import  card component to re-use </h5>
                    <h5>Import props.something from LIST /></h5>
                    <p>import from DB:  UserList </p>
                    <p>import from DB:  JSON/Quarter</p>

                    <p>Then execute FILTER/MAP function,  then  pass this information as props to the Card component which we are going to re-use to render/display MY COINS</p>
                </article>
// component did mount
// fetch but on that route, filter by userid===currentuserid .then setState(), .then map()
                <section className="">
                    {
                        this.props.users.map(user =>
                            <div key={user.id} className="card card--user">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        
                                        "User Name: pull from users.username" 
                                        {/* {users.username} */}
                                    {
                                        this.props.something
                                            // .filter(user => user.id === id)
                                            .map(user => <Card key={user.id}  {...this.props} />)
                                    }
                                
                                    </h5>

                                    <h6 >Has these quarters:</h6>
                                    <div className="">
                                    </div>

                                </div>
                            // </div>
                        )
                    }
                </section>

            </div>
        );
    }
}