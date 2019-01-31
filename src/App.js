import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import CurrencyPage from './components/pages/CurrencyCalc';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/currency/" component={CurrencyPage} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
