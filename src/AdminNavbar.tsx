import * as React from "react";
import { Component } from "react";
import Avatar from "react-avatar";
import * as jwt from 'jsonwebtoken';
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
  Spinner
} from "reactstrap";

interface User {
  name: string,
  username: string,
  pictureUrl: string
}

interface Props {
  brandText: string;
}

interface State {
  isLoadingUserData: boolean,
  user?: User
}

class AdminNavbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoadingUserData: true
    };
  }

  public async componentDidMount() {
    const token: string | null = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwt.decode(token);

        if (decodedToken) {
          this.setState({
            user: decodedToken['user'] as User
          });
        }
      } catch {}
    }

    this.setState({
      isLoadingUserData: false
    });
  }

  private logout() {
    localStorage.removeItem("token");
    window.location.href = '/';
  }

  private renderUserMenu() {
    const { isLoadingUserData, user } = this.state;

    if (isLoadingUserData) {
      return <Spinner color="light" size="sm" />;
    }

    if (user) {
      return (
        <UncontrolledDropdown nav>
          <DropdownToggle className="pr-0" nav>
            <Media className="align-items-center">
              <Avatar round={true} name={user.name} size="36" />
              <Media className="ml-2 d-none d-lg-block">
                <span className="mb-0 text-sm font-weight-bold">
                  {user.name}
                </span>
              </Media>
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

    return <></>
  }

  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <h1 className="text-white" style={{fontWeight:300}}>{this.props.brandText}</h1>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              {this.renderUserMenu()}
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
