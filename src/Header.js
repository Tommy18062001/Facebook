import React, { Component } from 'react';
import HeaderSearch from './components/HeaderSearch';
import HeaderNav from './components/HeaderNav';
import HeaderUser from './components/HeaderUser';
import './css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* search section component */}
                <HeaderSearch/>

                {/* nav section component */}
                <HeaderNav/>

                {/* user section component */}
                <HeaderUser/>
            </div>
        )
    }
}

export default Header
