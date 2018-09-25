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
    matchlist: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
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
        <Route exact path="/mycoincollection" render={(props) => {
          return <Mycoins users={this.state.users} quarters={this.state.quarter} states={this.state.states} matchlist={this.state.matchlist}{...props}/>
        }} />
        
        <Route exact path="/users" render={(props) => {
                    return <User users={this.state.users} deleteUser={this.deleteUser}/>
                }} />
        
      </React.Fragment >
    )

}
}