import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
// import App from './App';
import Midstone from './Midstone'


//Route included to wrap and make routing happen
ReactDOM.render(

<Router>
<Midstone />
 </Router>

,document.getElementById('root'));
