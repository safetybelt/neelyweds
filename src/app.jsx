import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { HeaderContainer } from 'containers';
import { setPath } from 'actions';
import 'normalize.css/normalize.css';
import styles from 'css/main.scss';

const img = require('img/castle-kiss.jpg');

class App extends React.Component {
    componentWillMount() {
        this.updatePath(this.props.location && this.props.location.pathname);
    }

    componentWillUpdate(props) {
        this.updatePath(props.location && props.location.pathname);
    }

    updatePath(path) {
        if (path.startsWith('/')) {
            path = path.slice(1);
        }
        path = !path ? '/' : path;
        this.props.dispatch(setPath(path));
    }

    render() {
        return (
            <div className={styles.container}>
                <HeaderContainer />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object,     // eslint-disable-line react/forbid-prop-types
    children: PropTypes.object,     // eslint-disable-line react/forbid-prop-types
};

export default connect()(App);
