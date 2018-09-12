import React, { Component } from 'react';
import Test from "./test"

class App extends Component {
  render() {
      return (
          <div>
              <header>
                <h1>Welcome to the 50 state quarters collector</h1>
              </header>
              <div>
                test component: <Test />
              </div>
          </div>
      );
  }
}


export default App;
