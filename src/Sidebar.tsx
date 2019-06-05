import * as React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import UserMenu from "./UserMenu";

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
  logo: any
}

class Sidebar extends Component<Props> {
  state = {
    collapseOpen: false
  };
  constructor(props: Props) {
    super(props);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute = (routeName: string) => {
    return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = (routes: RouteDefinition[]) => {
    return routes.map((prop, key) => (
      <NavItem key={key}>
        <a className="nav-link" href={prop.path} onClick={this.closeCollapse} >
          <FontAwesomeIcon icon={prop.icon} className="mr-2" />
          {prop.name}
        </a>
        {prop.appendSeparator && <div className="divider" />}
      </NavItem>
    ));
  };
  render() {
    const { routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank"
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left purple-bg"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon">
              <svg style={{ width: '24px', height: '24px', marginTop: '3px' }} viewBox="0 0 24 24">
                <path fill="#FFF" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
            </span>
          </button>
          {/* Brand */}
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <a href="/">
                <img
                  alt={logo.imgAlt}
                  className="navbar-brand-img"
                  src={logo.imgSrc}
                />
              </a>
            </NavbarBrand>
          ) : null}
          {/* User */}
          <Nav className="align-items-center d-md-none">
            <UserMenu showName={false} />
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    <a href="/">
                      <img
                        alt={logo.imgAlt}
                        src={logo.imgSrc}
                      />
                    </a>
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Navigation */}
            <Nav navbar>{this.createLinks(routes)}</Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Sidebar;
