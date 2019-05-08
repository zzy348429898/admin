import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import AdminContainer from '../containers/admin/AdminContainer';
import Login from '../containers/login/Login';
import { Divider } from 'antd';


const main: React.StatelessComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/test" component={
        () => <div style={{ overflow: 'hidden' }}>
          <div style={{ width: '100px', height: '100px', background: 'red', float:'left'}}></div>
          <div style={{ width: '100px', height: '100px', background: 'green' }}></div>
        </div>
      }></Route>
      <Route path="/" component={AdminContainer}></Route>
    </Switch>
  </BrowserRouter>
);

export default main;
