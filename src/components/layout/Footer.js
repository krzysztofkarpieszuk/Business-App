import React from 'react';

function Footer() {
    return (
        <footer className="app-footer navbar bg-dark">
            <div className="container">
                <p className="text-white text-center w-100 pt-2">&copy; {new Date().getFullYear()} Krzysztof Karpieszuk</p>
            </div>
        </footer>
    )
}

export default Footer;