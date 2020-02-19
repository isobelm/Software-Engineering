import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TestPage from './Pages/TestPage'
import history from './Utils/History'
import './App.css'

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/page" component={TestPage} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
