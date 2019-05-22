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
export declare const getUser: () => IUserPayload;
export declare const isAuthorized: (systemRole: string) => boolean;
export {};
