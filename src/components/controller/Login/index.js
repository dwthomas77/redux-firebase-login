import { connect } from 'react-redux';
import { addUser } from '../../../actions';
import Login from '../../view/Login';

const mapStateToProps = (state) => {
    
    return {
        isLoggedIn: !!state.user,
    };
};

const mapDispatchToProps = ({
    addUser,
});

const LoginController = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default LoginController;