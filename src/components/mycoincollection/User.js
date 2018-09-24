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
                                    {/* user.id: {user.id} <br/> */}
                                    {user.username}
                                    </h5>
                                    <h6>Needs these quarters:  <br/>/build a function to return what they need/</h6>
                                   
                                    <div className="">
                                    </div>
                                    {/* <a href="/register"
                                    onClick={() => this.props.deleteUser(user.id)}
                                    className="card-link">Delete User</a> */}

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