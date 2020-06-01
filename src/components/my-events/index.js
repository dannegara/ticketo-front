import { connect } from 'react-redux';
import Component from './component';

export default connect(
    (state, props) => {
        return {
            profile: state.auth.profile
        }
    }
)(Component);