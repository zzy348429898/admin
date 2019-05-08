import * as React from 'react';
import { Menu, Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Location, createBrowserHistory, History } from 'history';
import * as less from '../../less/main.less';

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

export interface AdminSiderProps {
  // menuList: Array<string | Array<string>>;
  menuList: object,
  collapsed: boolean;
  location?: Location;
  history?: History;
}
const iconMap = {
  home: 'home',
  animate: 'forward',
  basicAnimate: 'backward',
  // basicAnimate:'rollback',
  animateCase: 'rollback',
  UI: 'layout',
  button: 'play-circle',
  icon: 'meh',
  loading: 'loading',
  alert: 'alert',
  tabs: 'tags',
  form: 'form'
};
const cnMap = {
  home: '首页',
  animate: '动画',
  basicAnimate: '基础动画',
  animateCase: '动画案例',
  UI: 'UI模块',
  button: '按钮',
  icon: '图标',
  loading: '加载中',
  alert: '通知',
  tabs: '标签',
  form: '表单'
};

const AdminSider: React.StatelessComponent<AdminSiderProps> = (props: AdminSiderProps) => {
  const menuListGenerator = (menuList: object) => {
    const keys = Reflect.ownKeys(menuList);
    return keys.map((value, index) => {
      if (typeof (Reflect.get(menuList, value)) == 'string') {
        return <Item key={value.toString()}><Link to={`/${value.toString()}`}><Icon type={Reflect.get(iconMap, value)} /><span>{Reflect.get(cnMap, value)}</span></Link></Item>;
      }
      const subMenuList = Reflect.ownKeys(Reflect.get(menuList, value)).map((value2, index2) =>
        <Item key={value2.toString()}><Link to={`/${value2.toString()}`}><Icon type={Reflect.get(iconMap, value2)} /><span>{Reflect.get(cnMap, value2)}</span></Link></Item>
      );
      return <SubMenu key={index} title={<span><Icon type={Reflect.get(iconMap, value)} /><span className={props.collapsed ? less.displayNone : null}>{Reflect.get(cnMap, value)}</span></span>}>{subMenuList}</SubMenu>;
    });
  };
  return <Sider collapsible collapsed={props.collapsed} theme={'light'} trigger={null}>
    <Menu mode="inline" selectedKeys={[props.location.pathname.split('/').filter((i) => i).pop()]}>
      {menuListGenerator(props.menuList)}
    </Menu>
  </Sider>;
};

export default AdminSider;