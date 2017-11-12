import { connect } from 'react-redux';
import { LOGIN_ERROR_KEY, REGISTER_ERROR_KEY } from 'constants.js';
import { registerUser, loginUser } from 'actions';
import UserAuth from 'components/UserAuth';

const mapStateToProps = (state) => {

    const errors = [];
    
    if (state.errors[LOGIN_ERROR_KEY]) {
        errors.push(state.errors[LOGIN_ERROR_KEY]);
    }
    if (state.errors[REGISTER_ERROR_KEY]) {
        errors.push(state.errors[REGISTER_ERROR_KEY])
    }
    
    return {
        errors, 
        user: state.user,
    }
};

const mapDispatchToProps = ({
    registerUser,
    loginUser,
});

const UserAuthController = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserAuth);

export default UserAuthController;