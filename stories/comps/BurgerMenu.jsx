import React from 'react';
import { MenuItem, ResponsiveMenu, SubMenuItem } from '../../components/ResponsiveMenu/index';
import '../../components/ResponsiveMenu/css.css';

import { BrowserRouter } from 'react-router-dom';

export default class BurgerMenu extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ResponsiveMenu
					style={{
						background: '#eee',
						boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
					}}
					right>
					<MenuItem className="home" style={{ fontSize: 20 }} to="/">
						Home
					</MenuItem>
					<MenuItem to="/about">About</MenuItem>
					<MenuItem showIf={true} to="/edit">
						Edit
					</MenuItem>
					<SubMenuItem
						label="Drop Down"
						className="dropdown submenu"
						style={{
							background: '#ececec',
							boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
						}}>
						<MenuItem to="/disney">Go To Disneyland</MenuItem>
						<MenuItem to="/air-guitar">Air Guitar</MenuItem>
					</SubMenuItem>
					<MenuItem to="/test">Test</MenuItem>
					<MenuItem to="/ping">Ping This</MenuItem>
				</ResponsiveMenu>
			</BrowserRouter>
		);
	}
}
