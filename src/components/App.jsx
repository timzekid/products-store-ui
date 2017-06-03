import React, { Component, PropTypes } from 'react';

export default class App extends Component {
    static propTypes = {
        children : PropTypes.object
    };

    render() {
        return (
            <div>
                Wazzup?!
                {this.props.children}
            </div>
        );
    }
}
