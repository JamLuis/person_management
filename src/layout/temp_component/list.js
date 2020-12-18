'use strict'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { setList } from './../actions_temp/list';

class List extends Component {

    handleInput = (e) => {
        const { value } = e.target;
        const { dispatch } = this.props;
        dispatch(setList(value));
    }

    render() {
        const { list } = this.props;
        return (
            <div>
                <div style={{ width: '30%' }}>
                    test
                    <Input onChange={this.handleInput} />
                    <br />
                    {
                        list ? <p>{list}</p> : ''
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { list } = state;
    return {
        list: list.data
    }
}
export default connect(mapStateToProps)(List)