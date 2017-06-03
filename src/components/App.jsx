import React, { Component, PropTypes } from 'react';
import MuiThemeProvider                from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin            from 'react-tap-event-plugin';
import getMuiTheme                     from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#ffc107',
        primary2Color: '#fea000',
        accent1Color: '#8bc34a'
    }
});

export default class App extends Component {
    static propTypes = {
        children : PropTypes.object
    };

    componentDidMount() {
        injectTapEventPlugin();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme} >
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}
