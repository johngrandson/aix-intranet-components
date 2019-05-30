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
export declare function getUser(): IUserPayload | null;
export declare function hasRole(systemRole: string): boolean;
export declare function logout(): void;
