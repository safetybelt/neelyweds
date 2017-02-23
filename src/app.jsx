import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header } from 'components';
import { setPath } from 'actions';
import 'normalize.css/normalize.css';
import styles from 'css/main.scss';

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
        path = !path ? 'about' : path;
        this.props.dispatch(setPath(path));
    }

    render() {
        return (
            <div className={styles.container}>
                <Header />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object,
};

export default connect()(App);
