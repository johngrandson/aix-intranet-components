import { Component } from "react";
import { RouteDefinition } from "./Sidebar";
interface Props {
    routesFactory: () => Promise<RouteDefinition[]>;
}
interface State {
    routes: RouteDefinition[];
}
declare class AdminLayout extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    componentDidUpdate(): void;
    isInRole(routes: RouteDefinition[]): RouteDefinition[];
    getBrandText: () => string;
    render(): JSX.Element;
}
export default AdminLayout;
