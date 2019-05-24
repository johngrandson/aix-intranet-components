import Avatar from "react-avatar";
import { Spinner, UncontrolledDropdown, DropdownToggle, Media, DropdownMenu, DropdownItem } from "reactstrap";
import * as React from "react";
import { IUserPayload, getUser, logout } from "./services/user";

interface User {
  name: string,
  username: string,
  pictureUrl: string
}

interface Props {
  showName: boolean;
}

interface State {
  user?: User;
  isLoadingData: boolean;
}

export default class UserMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoadingData: true };
    this.logout = this.logout.bind(this);
  }

  private logout() {
    logout();
    location.href = '/';
  }

  public async componentDidMount() {
    const user: IUserPayload | null = getUser();

    if (user) {
      this.setState({
        user
      });
    }

    this.setState({
      isLoadingData: false
    });
  }

  public render() {
    const { isLoadingData, user } = this.state;
    const { showName } = this.props;

    if (isLoadingData) {
      return <Spinner color="light" size="sm" />;
    }

    if (user) {
      return (
        <UncontrolledDropdown nav>
          <DropdownToggle className="pr-0" nav>
            <Media className="align-items-center">
              <Avatar round={true} name={user.name} size="36" />
              {
                showName &&
                <Media className="ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm font-weight-bold">
                    {user.name}
                  </span>
                </Media>
              }
            </Media>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem to="/admin/user-profile" disabled>
              <i className="ni ni-single-02" />
              <span>Meu perfil</span>
            </DropdownItem>
            <DropdownItem to="/admin/user-profile" disabled>
              <i className="ni ni-settings-gear-65" />
              <span>Ajustes</span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.logout}>
              <i className="ni ni-user-run" />
              <span>Sair</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    }

    return <></>;
  }
}
