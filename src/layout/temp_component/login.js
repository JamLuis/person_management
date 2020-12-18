/* eslint-disable no-console */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
// import { setList } from './../actions_temp/list';

const FormCreator = Form.create;
class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const clientHeight = document.clientHeight;
        const clientWidth = document.clientWidth;
        return (
            <div style={{ height: clientHeight, width: clientWidth }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid gray', padding: 28 }}>
                    <div style={{ width: '100%' }}><p style={{ fontSize: 18, fontWeight: 700 }}>Login Page</p></div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">  Forgot password </a>
                            <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button"> Login </Button>
                            <div> Or <a href="">register now!</a></div>
                        </Form.Item>
                    </Form>
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
export default connect(mapStateToProps)(FormCreator({})(Login))