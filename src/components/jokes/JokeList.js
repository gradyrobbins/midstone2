import React, { Component } from 'react'
import { Link } from "react-router-dom"
import NavBar from './../nav/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
class JokeList extends Component{

    render() {
        
        return (
        <div>
        <NavBar />
        
        <React.Fragment>
            
            <div className="addNew">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/states/new")}
                        }>
                    Add a new coin to your collection
                </button>

                <form onSubmit="return checkForSelection();">
                    <select id="states">
                        <option value="AL"> Alabama</option>
                        <option value="AK"> Alaska</option>
                        <option value="AZ"> Arizona</option>
                        <option value="AR"> Arkansas</option>
                    
                    </select>&nbsp;&nbsp;
                </form>



            </div>
            <section className="jokes">
            {
                this.props.jokes.map(joke =>
                    <div key={joke.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                state name: {joke.setup}<br/>
                                more details: {joke.punchline}
                                    <Link className="nav-link" to={`/jokes/${joke.id}`}><button>Details</button></Link>
                                <a 
                                    onClick={() => this.props.deleteJoke(joke.id)}
                                    className="card-link"><button>Delete this state from your collection</button></a>
                            </h5>
                            
                            
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
            </div>
    )
}}


export default JokeList;