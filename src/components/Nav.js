import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const links = ['Home', 'Popular', 'Battle'];

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className='nav'>
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <NavLink exact to={link === 'Home' ? '/' : link.toLowerCase()}>{link}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Nav;

