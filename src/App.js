import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import history from './Utils/History'
import TestFeedData from './Examples/TestFeedData'
import TestPage from './Pages/TestPage'
import UsersByMostEditsPage from './Pages/UsersByMostEditsPage'
import MostActiveUsers from './Pages/MostActiveUsers'
import MostActivePages from './Pages/MostActivePages'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/page" component={TestPage} />
          <Route
            exact
            path="/users-by-most-edits"
            component={UsersByMostEditsPage}
          />
          <Route exact path="/most-active-users" component={MostActiveUsers} />
          <Route exact path="/most-active-pages" component={MostActivePages} />
          <Route exact path="/feed" component={TestFeedData} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
