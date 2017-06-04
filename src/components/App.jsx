import React, { Component, PropTypes } from 'react';
import MuiThemeProvider                from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin            from 'react-tap-event-plugin';
import getMuiTheme                     from 'material-ui/styles/getMuiTheme';

import AppBar from './AppBar.jsx';
import Footer from './Footer.jsx';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#ffc107',
        primary2Color: '#fea000',
        accent1Color: '#8bc34a'
    }
});

export default class App extends Component {
    static propTypes = {
        children : PropTypes.object.isRequired,
        history  : PropTypes.object.isRequired,
        location : PropTypes.object.isRequired
    };

    componentDidMount() {
        injectTapEventPlugin();
    }

    handleBackBtnClick = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme} >
                <div>
                    <AppBar
                        onBackBtnClick = {this.handleBackBtnClick}
                        showBackBtn    = {this.props.location.pathname !== '/'}
                    />
                    {this.props.children}
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}
