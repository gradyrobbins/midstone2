import React, { Component } from 'react';
import NavBar from '../nav/NavBar';
import List from './List'
import {Route} from 'react-router-dom'
class Learn extends Component {
    state = [];
    componentDidMount() {
        let papa = this.props.states
        this.setState({states: papa})
    }

    
  render() {
      return (
            <div>
                <div>
                    <NavBar />
                </div>
                
                <br/>
                
                <div>
                <Route  render={(props) => {
          return <List {...props}
          states={this.state.states}/>
          }} />
                </div>
                <br/>
                <div>
                    
                </div>
 
         </div>
      ); 
  }
};


export default Learn;
                