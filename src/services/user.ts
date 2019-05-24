import * as jwt from 'jsonwebtoken';

export interface IPayload {
  iat: number;
  ext: number;
  user: IUserPayload;
}

export interface IUserPayload {
  email: string;
  name: string;
  roles: string[];
  username: string;
  pictureUrl: string;
}

export function getUser(): IUserPayload | null {
  const token: string | null = localStorage.getItem("token");

  if (token) {
    try {
      const payload: IPayload = jwt.decode(token) as IPayload;

      if (payload) {
        return payload.user;
      }
    } catch { }
  }

  return null;
};


export function hasRole(systemRole: string): boolean {
  const user = getUser();

  if (user) {
    return user.roles && !!user.roles.find((role: string) => systemRole === role);
  }

  return false;
};


export function logout() {
  localStorage.removeItem("token");
}
