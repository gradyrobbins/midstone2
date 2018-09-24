import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
import HomePage from './components/homepage/HomePage'
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'
import Home from './home'
import Mycoins from './components/mycoincollection/mycoins';
import User from './components/mycoincollection/User'
import List from './components/learn/List'
export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    states: [],
    quarter: [],
    // isLoaded: false
  }

  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))

  // getAllUsers = user => DataManager.getAll("users", user)
  //   .then(users => this.setState({
  //     users: users
  //   }))

  deleteUser = id => DataManager.delete("user", id)
    .then(() => DataManager.getAll("user"))
    .then(user => this.setState({
      user: user
    }))

  editUser = (id, user) => DataManager.edit("user", id, user)
    .then(() => DataManager.getAll("user"))
    .then(user => this.setState({
      user: user
    }))


  componentDidMount() {

    const newState = {}

  DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })
      .then(()=>DataManager.getAll("state"))
      .then(states => newState.states = states)
      .then(()=>DataManager.getAll("quarter"))
      .then(quarter => newState.quarter = quarter)
      .then(() => this.setState(newState))
    }
    
  ;

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/list" render={(props) => {
          return <List {...props}
          states={this.state.states}/>
          }} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" render={(props) => {
          return <Register {...props}
          addUser={this.addUser}
          users={this.state.users} />
        }} />
        {/* <Route exact path="/learn" component={Learn } states={this.state.states} /> */}
        <Route exact path="/mycoincollection" render={(props) => {
          return <Mycoins users={this.state.users} quarters={this.state.quarter} states={this.state.states} {...props}/>
        }} />
        
        <Route exact path="/users" render={(props) => {
                    return <User users={this.state.users} deleteUser={this.deleteUser}/>
                }} />
        
      </React.Fragment >
    )

}
}