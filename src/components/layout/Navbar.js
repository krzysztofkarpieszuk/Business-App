import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="app-header">
			<nav className="app-header__nav navbar navbar-expand-md navbar-dark bg-dark">
				<div className="container">
					<Link to="/" className="navbar-brand">
						Businesstry
					</Link>
                    <button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
                <Menu />
				</div>


			</nav>
		</header>
	);
};

const Menu = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/currency" className="nav-link">Currency</Link>
                </li>
                <li className="nav-item">
                    <Link to="/crypto" className="nav-link">Crypto</Link>
                </li>
                <li className="nav-item">
                    <Link to="/market" className="nav-link">Stock</Link>
                </li>
                <li className="nav-item">
                    <Link to="/news" className="nav-link">News</Link>
                </li>
                <li className="nav-item">
                    <Link to="/weather" className="nav-link">Weather</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
