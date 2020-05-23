import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Component from './component';

export default compose(
    withRouter
)(Component);