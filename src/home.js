import React, { Component } from 'react';
import NavBar from './components/nav/NavBar'
import map from './img/USMap.png'
import homecss from './homecss.css'
class Home extends Component {
  render() {
      return (
            <div>
                <div>
                    <NavBar />
                </div>
                
                <br/>
                    <img src={map} alt="USMap" className="USMap"/> 
            </div>
         
      );
  }
}


export default Home;
