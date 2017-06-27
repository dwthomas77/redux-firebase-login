import { connect } from 'react-redux';
import Login from '../../view/Login';

const mapStateToProps = (state) => {
    
    console.log(state);
    return {
        isLoggedIn: state.isLoggedIn,
    };
}

const LoginController = connect(
    mapStateToProps,
)(Login);

export default LoginController;