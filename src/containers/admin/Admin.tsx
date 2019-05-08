import * as React from 'react';
import { Layout, Menu, Collapse} from 'antd';
import * as less from '../admin/admin.less';
import AdminSider from '../adminSider/adminSider';
import { initialStateItf } from '../../redux/admin';
import AdminHeader from '../adminHeader/adminHeader';
import { Location, History } from 'history';

const { Content, Footer } = Layout;
export interface AdminProps {
  layoutInfo: initialStateItf,
  match?: string,
  location?: Location,
  collapseTrigger?: React.MouseEventHandler,
  history?: History
}

export interface AdminState {
}

export default class Admin extends React.Component<AdminProps, AdminState> {
  constructor(props: AdminProps) {
    super(props);
  }

  render() {
    return <div className={less.adminWrapper}>
      <Layout className={less.layout}>
        <AdminSider menuList={this.props.layoutInfo.menuList} collapsed={this.props.layoutInfo.collapsed} location={this.props.location} history={this.props.history}></AdminSider>
        <Layout>
          <AdminHeader siderCollapsed={this.props.layoutInfo.collapsed} collapseTrigger={this.props.collapseTrigger}></AdminHeader>
          <Content>
            Content
          </Content>
          <Footer>
            Footer
          </Footer>
        </Layout>
      </Layout>
    </div>;
  }
}