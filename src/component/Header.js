import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo">
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li><Link to="/" className="active">Home</Link></li>
                                <li><Link to="/catrgory">Category</Link></li>
                                <li><Link to="/listing">Listing</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><div className="main-white-button"><a href="#"><i className="fa fa-plus" /> Add Your Listing</a></div></li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;