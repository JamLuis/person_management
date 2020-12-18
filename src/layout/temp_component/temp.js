/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

class Temp extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.history.push('login');
    }

    render() {
        return (
            <div>
                <p>Temp Page!</p>
                <Button onClick={this.handleClick} >To Login</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { router } = state;
    return {
        router: router
    }
}

export default connect(mapStateToProps)(Temp)
