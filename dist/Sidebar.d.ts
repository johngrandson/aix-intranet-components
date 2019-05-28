import { Component } from "react";
import './styles.css';
interface Props {
    bgColor: string;
    routes: any[];
    logo: any;
}
declare class Sidebar extends Component<Props> {
    state: {
        collapseOpen: boolean;
    };
    constructor(props: Props);
    activeRoute: (routeName: string) => "active" | "";
    toggleCollapse: () => void;
    closeCollapse: () => void;
    createLinks: (routes: any[]) => JSX.Element[];
    render(): JSX.Element;
}
export default Sidebar;
