import { connect } from 'react-redux';
import AuthorizedRoute from 'components/Route';

const mapStateToProps = (state) => ({ user: state.user });
const AuthorizedRouteController = connect(mapStateToProps)(AuthorizedRoute);

export default AuthorizedRouteController;