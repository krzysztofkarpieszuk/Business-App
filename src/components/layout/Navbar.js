import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<header className="app-header sticky-top">
			<nav className="app-header__nav navbar navbar-expand-md navbar-dark bg-info">
				<div className="container">
					<Link to="/" className="app-header__nav-brand navbar-brand">
						Businesstry
					</Link>
                    <button className="app-header__toggler navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavigationDropdown"
                            aria-controls="navbarNavigationDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon" />
                    </button>
                    <Menu />
				</div>
			</nav>
		</header>
	);
};

function Menu() {
    return (
        <div className="collapse navbar-collapse" id="navbarNavigationDropdown">
            <ul className="app-header__nav-list navbar-nav">
                <li className="app-header__nav-item nav-item">
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="app-header__nav-item nav-item">
                    <NavLink to="/currency" activeClassName="active" className="nav-link app-header__nav-link">Currency</NavLink>
                </li>
                <li className="app-header__nav-item nav-item">
                    <NavLink to="/crypto" activeClassName="active" className="nav-link app-header__nav-link">Crypto</NavLink>
                </li>
                <li className="app-header__nav-item nav-item">
                    <NavLink to="/market" activeClassName="active" className="nav-link app-header__nav-link">Stock</NavLink>
                </li>
                <li className="app-header__nav-item nav-item">
                    <NavLink to="/news" activeClassName="active" className="nav-link app-header__nav-link">News</NavLink>
                </li>
                <li className="app-header__nav-item nav-item">
                    <NavLink to="/weather" activeClassName="active" className="nav-link app-header__nav-link">Weather</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
