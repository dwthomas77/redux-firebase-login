import { connect } from 'react-redux';
import { logoutUser } from 'actions';
import Navigation from 'components/Navigation';

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = ({
    logoutUser,
});

const NavigationController = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationController;