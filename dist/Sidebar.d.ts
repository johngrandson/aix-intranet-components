import { Component } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface RouteDefinition {
    appendSeparator?: boolean;
    path: string;
    name: string;
    icon: IconProp;
    role?: string;
}
interface Props {
    bgColor: string;
    routes: RouteDefinition[];
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
    createLinks: (routes: RouteDefinition[]) => JSX.Element[];
    render(): JSX.Element;
}
export default Sidebar;
