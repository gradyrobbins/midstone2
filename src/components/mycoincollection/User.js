import React, { Component } from 'react'
import "./../learn/bloop.css"
import { Link } from "react-router-dom"
import NavBar from '../nav/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"

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
                                    <h3 className="card-title">
                                    {user.username}
                                    </h3>
                                   
                                    <div>
                                        <Link className="nav-link" to={`/users/${user.id}`}>
                                            <button>Details</button>
                                            
                                        </Link> 
                                    </div>
                                    

                                    
                                   
                                    
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