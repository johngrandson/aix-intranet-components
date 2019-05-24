import * as React from 'react';
import { hasRole } from './services';

export interface IAuthorizedProps {
  role: string;
}

class Authorized extends React.Component<IAuthorizedProps, any> {
  public render() {
    if (hasRole(this.props.role)) {
      return this.props.children
    } else {
      return false
    }
  }
}

export default Authorized;




