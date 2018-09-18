import React, { Component } from "react"

import Card from "./Card"


class List extends Component {

    
   
       state = {
          
           st: []
           
       }

    
    componentDidMount() {
        const newState = {}
    
        fetch("http://localhost:8088/state")
            .then(r => r.json())
            .then(r => newState.st = r)
            .then(() => this.setState(newState))
    }

    render() {
        console.log("after fetch, state:" + this.state.st)
        return (
            this.state.st.map(item => <Card everything={item}/>)
            
        )
    }
}

export default List
                