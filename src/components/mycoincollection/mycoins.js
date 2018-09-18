import React, { Component } from 'react'
import NavBar from '../nav/NavBar';


export default class Mycoins  extends Component {
    render() {
        
        console.log("mycoins.js component.  this component needs:  users properties (props) of <app views /> and <card /> component", this.props.users)
        const currentUserID = JSON.parse(localStorage.getItem("credentials")).id
        console.log(currentUserID);
        return (
            <div>
                <NavBar />
                
                <section className="">
                    {
                        this.props.users.filter(user => user.id === currentUserID).map(user =>
                            <div key={user.id} className="card card--user">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        
                                        "Hello, {user.username}" 
                                        
                                    {/* {
                                        this.props.users.filter
                                        .filter(user => user.id === id)
                                        .map(user => <Card key={user.id}  {...this.props} />)
                                    } */}
                                
                                    </h5>

                                    <h6 >These are your quarters:</h6>
                                    <div className="">
                                    </div>
                                    

                                </div>
                             </div>
                        )
                    }
                </section>

            </div>
        );
    }
}
// advice from SHU:  component did mount
// fetch but on that route, filter by userid===currentuserid .then setState(), .then map()