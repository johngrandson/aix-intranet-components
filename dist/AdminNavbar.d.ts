import { Component } from "react";
interface OwnProps {
    brandText: string;
}
declare type Props = OwnProps;
declare class AdminNavbar extends Component<Props> {
    state: {
        user: {
            name: string;
        };
    };
    render(): JSX.Element;
}
export default AdminNavbar;
