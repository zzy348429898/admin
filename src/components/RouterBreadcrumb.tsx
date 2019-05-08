import * as React from 'react';
import { Location } from 'history';
import { withRouter} from 'react-router';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import * as less from '../less/main.less';


export interface routerBreadcrumbPropItf {
  location?: Location
}

const RouterBreadcrumb: React.StatelessComponent<routerBreadcrumbPropItf> = (props: routerBreadcrumbPropItf) => {
  const {location} = props;
  const pathItems = location.pathname.split('/').filter((i:string) => i);
  const extraBreadcrumbItem = pathItems.map((value, index) => {
    const url = `/${pathItems.slice(0, index + 1).join('/')}`;
    return  <Breadcrumb.Item key={url}><Link to={url}>{`${pathItems[index]}`}</Link></Breadcrumb.Item>;
  });
  return <Breadcrumb className={less.breadcrumb}>{[(<Breadcrumb.Item key={'home'}><Link to={'/'}>{'Home'}</Link></Breadcrumb.Item>)].concat(extraBreadcrumbItem)}</Breadcrumb>;
};

export default withRouter(RouterBreadcrumb);