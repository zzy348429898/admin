import * as React from 'react';
import { Row, Col } from 'antd';
import * as less from '../login/login.less';
import WrappedLoginForm from './LoginForm';

export interface LoginProps {
  history?: History,

}

const Login: React.StatelessComponent<LoginProps> = (props: LoginProps) => {
  return <Row type="flex" align="middle" justify="center" className={less.loginPage}>
    <WrappedLoginForm history={props.history}></WrappedLoginForm>
  </Row>;
};

export default Login;