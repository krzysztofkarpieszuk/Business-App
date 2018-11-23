import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/Index';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact to="/" component={HomePage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
