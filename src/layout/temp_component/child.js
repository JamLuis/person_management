/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

class Child extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleClick = () => {
        this.props.history.push('login');
    }

    render() {
        return (
            <div>
                <p>Child Page!</p>
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

export default connect(mapStateToProps)(Child)
