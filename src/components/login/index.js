import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Component from './component';
import { login } from '../../store/actions/auth';

export default compose(
    withRouter,
    connect(null, { login }),
)(Component);