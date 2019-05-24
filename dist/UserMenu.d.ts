import * as React from "react";
interface User {
    name: string;
    username: string;
    pictureUrl: string;
}
interface Props {
    showName: boolean;
}
interface State {
    user?: User;
    isLoadingData: boolean;
}
export default class UserMenu extends React.Component<Props, State> {
    constructor(props: Props);
    private logout;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
