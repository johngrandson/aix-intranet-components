import * as jwt from 'jsonwebtoken';

export interface IPayload {
  iat: number;
  ext: number;
  user: IUserPayload;
}

interface IUserPayload {
  email: string;
  name: string;
  roles: string[];
  username: string;
}

export const getUser = () => {
  const payload = jwt.decode(localStorage.getItem('token') || '') as IPayload
    || { user: {} };
  return payload.user;
};


export const isAuthorized = (systemRole: string) => {
  const user = getUser();
  return user.roles && !!user.roles.find((role: string) => systemRole === role);
};



