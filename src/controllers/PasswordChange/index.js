import { connect } from 'react-redux';
import { resetPassword } from 'actions';
import PasswordChange from 'components/PasswordChange';

const mapDispatchToProps = ({
    resetPassword,
});

const PasswordChangeController = connect(
    null,
    mapDispatchToProps,
)(PasswordChange);

export default PasswordChangeController;