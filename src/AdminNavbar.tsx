import * as React from "react";
import { Component } from "react";
import { Navbar, Nav, Container } from "reactstrap";
import UserMenu from "./UserMenu";

interface Props {
  brandText: string;
}

class AdminNavbar extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }


  render() {
    console.log('this.props.brandText', this.props.brandText)
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <h1 className="text-white" style={{ fontWeight: 300 }}>{this.props.brandText}</h1>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UserMenu showName={true} />
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
