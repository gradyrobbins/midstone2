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
    news: [],
    messages: [],
    tasks: [],
    jokes: [],
    events: [],
    friends: [],
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

  addNews = news => DataManager.add("news", news)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  deleteNews = id => DataManager.delete("news", id)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  editNews = (id, news) => DataManager.edit("news", id, news)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  addMessage = messages => DataManager.add("messages", messages)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))

  deleteMessage = id => DataManager.delete("messages", id)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))

  editMessage = (id, messages) => DataManager.edit("messages", id, messages)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))

  addTask = task => DataManager.add("tasks", task)
    .then(() => DataManager.getUnfinishedTasks("tasks"))
    .then(tasks => this.setState({
      tasks: tasks
    }))

  deleteTask = id => DataManager.delete("tasks", id)
    .then(() => DataManager.getUnfinishedTasks("tasks"))
    .then(tasks => this.setState({
      tasks: tasks
    }))

  editTask = (id, tasks) => DataManager.edit("tasks", id, tasks)
    .then(() => DataManager.getUnfinishedTasks("tasks"))
    .then(tasks => this.setState({
      tasks: tasks
    }))

  addJoke = joke => DataManager.add("jokes", joke)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  deleteJoke = id => DataManager.delete("jokes", id)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  editJoke = (id, jokes) => DataManager.edit("jokes", id, jokes)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  addEvent = event => DataManager.add("events", event)
    .then(() => DataManager.getAllAscend("events"))
    .then(events => this.setState({
      events: events
    }))

  deleteEvent = id => DataManager.delete("events", id)
    .then(() => DataManager.getAllAscend("events"))
    .then(events => this.setState({
      events: events
    }))

  editEvent = (id, events) => DataManager.edit("events", id, events)
    .then(() => DataManager.getAllAscend("events"))
    .then(events => this.setState({
      events: events
    }))

  addFriend = friend => DataManager.add("friends", friend)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  deleteFriend = id => DataManager.delete("friends", id)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  editFriend = (id, friends) => DataManager.edit("friends", id, friends)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  componentDidMount() {

    const newState = {}

    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })
      .then(() => {
        DataManager.getAll("news")
          .then(allNews => {
            newState.news = allNews
          })
          .then(() => {
            DataManager.getAll("messages")
              .then(allMessages => {
                newState.messages = allMessages
              })
              .then(() => {
                DataManager.getUnfinishedTasks("tasks")
                  .then(allTasks => {
                    newState.tasks = allTasks
                  })
                  .then(() => {
                    DataManager.getAll("jokes")
                      .then(allJokes => {
                        newState.jokes = allJokes
                      })
                      .then(() => {
                        DataManager.getUnfinishedTasks("events")
                          .then(allEvents => {
                            newState.events = allEvents
                          })
                          .then(() => {
                            DataManager.getAll("friends")
                              .then(allFriends => {
                                newState.friends = allFriends
                              })
                              .then(() => {
                                this.setState(newState)
                              })
                          })
                      })
                  })
              })
          })
      })
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
        <Route exact path="/news" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsList {...props}
              deleteNews={this.deleteNews}
              news={this.state.news} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/news/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsForm {...props}
              addNews={this.addNews} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/news/:newsId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsDetail {...props}
              deleteNews={this.deleteNews}
              news={this.state.news} />
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/messages" render={(props) => {
          if (this.isAuthenticated()) {
            return <MessageList {...props}
              users={this.state.users}
              editMessage={this.editMessage}
              deleteMessage={this.deleteMessage}
              messages={this.state.messages} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/messages/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <MessageForm {...props}
              messages={this.state.messages}
              addMessage={this.addMessage} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/messages/edit/:messageId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <MessageEditForm  {...props} editMessage={this.editMessage} messages={this.state.messages} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/tasks" render={(props) => {
          if (this.isAuthenticated()) {
            return <TaskList {...props}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              tasks={this.state.tasks} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/tasks/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <TaskForm {...props}
              addTask={this.addTask} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/tasks/:taskId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <TaskDetail {...props} deleteTask={this.deleteTask} tasks={this.state.tasks} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/tasks/edit/:taskId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <TaskEditForm  {...props} editTask={this.editTask} tasks={this.state.tasks} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/jokes" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeList {...props}
              deleteJoke={this.deleteJoke}
              jokes={this.state.jokes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/jokes/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeForm {...props}
              addJoke={this.addJoke} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/jokes/:jokeId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeDetail {...props} deleteJoke={this.deleteJoke} jokes={this.state.jokes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/jokes/edit/:jokeId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeEditForm {...props} editJoke={this.editJoke} deleteJoke={this.deleteJoke} jokes={this.state.jokes} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> 
        < Route exact path="/events" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventList {...props}
              deleteEvent={this.deleteEvent}
              events={this.state.events} />
          } else {
            return <Redirect to="/" />
          }
        }
        } />
        < Route exact path="/events/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventForm {...props}
              addEvent={this.addEvent} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/events/:eventId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventDetail {...props} deleteEvent={this.deleteEvent} events={this.state.events} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/events/edit/:eventId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventEditForm  {...props} editEvent={this.editEvent} events={this.state.events} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        {/* <Route exact path="/friends" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendList {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/friends/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendForm {...props}
              addFriend={this.addFriend} />
          } else {
            return <Redirect to="/" />
          }
        }} /> */}
        {/* <Route exact path="/friends/:friendId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendDetail {...props} deleteFriend={this.deleteFriend} friends={this.state.friends} />
          } else {
            return <Redirect to="/" />
          }
        }} /> */}
      </React.Fragment >
    )

  }
}
