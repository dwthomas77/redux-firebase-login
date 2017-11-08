import { connect } from 'react-redux';
import { registerUser, loginUser } from 'actions';
import UserAuth from 'components/UserAuth';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = ({
    registerUser,
    loginUser,
});

const UserAuthController = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserAuth);

export default UserAuthController;