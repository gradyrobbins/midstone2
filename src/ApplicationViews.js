import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
import HomePage from './components/homepage/HomePage'
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'
// import FriendList from './components/FriendList'
// import FriendForm from './Forms/FriendForm'
// import TaskList from './components/tasks/TaskList'
// import TaskForm from './components/tasks/TaskForm'
// import TaskDetail from './components/tasks/TaskDetails'
// import TaskEditForm from './components/tasks/TaskEditForm'
// import MessageList from './components/messages/MessageList'
// import MessageForm from './components/messages/MessageForm'
// import MessageEditForm from './components/messages/MessageEditForm'
// import NewsList from './components/news/NewsList'
// import NewsForm from './components/news/NewsForm'
// import NewsDetail from './components/news/NewsDetail'
// import JokeList from './components/jokes/JokeList'
// import JokeForm from './components/jokes/JokeForm'
// import JokeDetail from './components/jokes/JokeDetail'
// import JokeEditForm from './components/jokes/JokeEditForm'
// import EventList from './components/events/EventList'
// import EventForm from './components/events/EventForm'
// import EventDetail from './components/events/EventDetails'
// import EventEditForm from './components/events/EventEditForm'

export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    state: [],
    quarter: [],
    isLoaded: false
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
      })  .then(() => {this.setState(newState)})
   }
                     

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" render={(props) => {
          return <Register {...props}
            addUser={this.addUser}
            users={this.state.users} />
        }} />
        
      </React.Fragment >
    )

  }
}
