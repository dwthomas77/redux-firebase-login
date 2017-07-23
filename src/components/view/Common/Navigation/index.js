import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    
    const { user, logoutUser } = props;
    
    const userMsg = user ? `Logged in as ${user.email}` : 'User is not logged in';
    
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/authorized">Authorized</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><span className="navigation__logout_link" onClick={logoutUser}>Logout</span></li>
            </ul>
            <span className="navigation__user-email">{userMsg}</span>
        </nav>
    );
};

export default Navigation;