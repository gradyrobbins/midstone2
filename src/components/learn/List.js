import React, { Component } from "react"
import NavBar from "../nav/NavBar";

class List extends Component {

    render() {
        
        return (
        <React.Fragment>
            <div>
                <NavBar />
            </div>
            
            <div>
                {this.props.states.map(item => {
                    // console.log(item)
                    return <div className="Card" key={item.state_id}>
                                {item.name} <br/><br/>
                                Date of Statehood: {item.Statehood} <br/>
                                Capital: {item.Capital} <br/>
                                Nicknames: {item.Nicknames} <br/>
                                Motto: {item.Motto} <br/>
                                Flower: {item.Flower} <br/>
                                Bird: {item.Bird} <br/>
                                </div>
                        })
                }
           
            </div>
        </React.Fragment>
            )
            
        
    }
}

export default List
                