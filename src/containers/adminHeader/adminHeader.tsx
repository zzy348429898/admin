import * as React from 'react';
import { Layout, Icon } from 'antd';
import RouterBreadcrumb from '../../components/RouterBreadcrumb';
import * as less from './adminHeader.less';

const { Header } = Layout;

export interface adminHeaderProps {
  siderCollapsed: boolean,
  collapseTrigger?: React.MouseEventHandler
}

const AdminHeader: React.StatelessComponent<adminHeaderProps> = (props: adminHeaderProps) => {
  return <Header className={less.header}>
    <Icon type={props.siderCollapsed ? 'menu-unfold' : 'menu-fold'} onClick={props.collapseTrigger}></Icon>
    <RouterBreadcrumb></RouterBreadcrumb>
  </Header>;
};
export default AdminHeader;