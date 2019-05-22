import { Component } from "react";
interface User {
    name: string;
    username: string;
    pictureUrl: string;
}
interface Props {
    brandText: string;
}
interface State {
    isLoadingUserData: boolean;
    user?: User;
}
declare class AdminNavbar extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    private logout;
    private renderUserMenu;
    render(): JSX.Element;
}
export default AdminNavbar;
