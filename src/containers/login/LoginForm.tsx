import * as React from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { createBrowserHistory, History } from 'history';
import * as less from '../login/loginForm.less';

export interface LoginFromProps extends FormComponentProps {
  history: History;
  
}

class LoginFrom extends React.Component<LoginFromProps> {
  constructor(props: LoginFromProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('submit');
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push('/admin');
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout="vertical" className={less.loginForm}>
        <Form.Item>
          {
            getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username!'
                }
              ]
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}></Icon>}></Input>
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}></Icon>}></Input>
            )
          }
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={less.forgot} href="/app" >Forgot password</a>
          <Button type="primary" htmlType="submit" className={less.button}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form >
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginFrom);
export default WrappedLoginForm;