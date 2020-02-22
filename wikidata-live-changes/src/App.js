import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import history from './Utils/History'
import TestFeedData from './Examples/TestFeedData'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/page" component={HomePage} />
          <Route exact path="/feed" component={TestFeedData} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
