import React, { Component } from 'react'
import "./../learn/bloop.css"
import NavBar from '../nav/NavBar';

class User extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <section className="something">
                {
                        this.props.users.map(user =>
                            <div key={user.id} className="card card--user">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        
                                    user ID: {user.id} <br/>
                                    Name: {user.username}
                                        
                                    </h5>

                                   
                                    <div className="">
                                    </div>
                                    <a href="/register"
                                    onClick={() => this.props.deleteUser(user.id)}
                                    className="card-link">Delete User</a>

                                </div>
                             </div>
                        )
                    }
                </section>

                
            </div>
        )
    }
}

export default User