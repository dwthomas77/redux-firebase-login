import React from 'react';

const Home = (props) => {

    console.log(props);
    const { isLoggedIn } = props;
    
    return (<div>Login Page {isLoggedIn ? 'YES LOGGED IN' : 'NO NOT LOGGED IN'}</div>);
    
};

export default Home;