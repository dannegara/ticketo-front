import { connect } from 'react-redux'
import Component from './component';
import { logout } from '../../../store/actions/auth';

export default connect(
    (state, props) => ({
        isAuth: state.auth.isAuth
    }),
    { logout }
)(Component);