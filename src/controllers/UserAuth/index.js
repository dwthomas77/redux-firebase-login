import { connect } from 'react-redux';
import { registerUser, loginUser } from 'actions';
import UserAuth from 'components/UserAuth';

const mapStateToProps = (state) => {
    
    return {
        isLoggedIn: !!state.user.uid,
    };
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