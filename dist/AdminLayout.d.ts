import { Component } from "react";
interface RouteDefinition {
    path: string;
    name: string;
    icon: string;
}
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
    getBrandText: () => string;
    render(): JSX.Element;
}
export default AdminLayout;
