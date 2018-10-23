import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MenuItem, ResponsiveMenu, SubMenu } from './components/ResponsiveMenu/';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Dashboard = props => {
	return (
		<div style={{ padding: 16 }}>
			<h3>Dashboard</h3>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi nihil laboriosam
				accusamus est voluptas consectetur sequi provident quia vitae saepe beatae, unde ab
				assumenda quod illo tenetur amet adipisci.
			</p>
		</div>
	);
};

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<div style={{ background: '#2ecc71', color: 'white' }}>
						<ResponsiveMenu breakpoint={768} rightAlign={true} className={{ root: 'rootClass' }}>
							<MenuItem to="/" label="Home" />
							<MenuItem to="/dashboard" label="Dashboard" />
							<MenuItem to="/products" label="products" fontAwesomeIcon={faAddressBook} />
							<SubMenu label="Dropdown Menu" style={{ background: '#2ecc71', color: 'white' }}>
								<MenuItem to="/menu1" label="Menu 1" fontAwesomeIcon={faAddressBook} />
								<MenuItem to="/menu2" label="Menu 2" fontAwesomeIcon={faAddressBook} />
							</SubMenu>
						</ResponsiveMenu>
					</div>
					<Switch>
						<Route exact path="/" />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/products" />
						<Route exact path="/aboutus" />
						<Route exact path="/team" />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
