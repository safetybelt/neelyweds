import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header } from 'components';

class HeaderContainer extends Component {
    componentWillMount() {
        this.state = { menuActive: false };
    }

    componentWillReceiveProps(props) {
        if (props.path !== this.props.path) {
            this.setState({ menuActive: false });
        }
    }

    toggleMenu() {
        this.setState({ menuActive: !this.state.menuActive });
    }

    render() {
        return (
            <Header
                path={this.props.path}
                menuActive={this.state.menuActive}
                toggleMenu={this.toggleMenu.bind(this)}
            />
        );
    }
}

HeaderContainer.propTypes = {
    dispatch: PropTypes.func,
    path: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        path: state.navigation.path,
    };
};

export default connect(mapStateToProps)(HeaderContainer);
