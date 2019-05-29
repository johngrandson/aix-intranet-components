import * as React from "react";
import { Component } from "react";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import Sidebar, { RouteDefinition } from "./Sidebar";
import UserHeader from "./UserHeader";
import { hasRole } from "./services";

interface Props {
  routesFactory: () => Promise<RouteDefinition[]>;
}

interface State {
  routes: RouteDefinition[];
}

class AdminLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { routes: [] };
  }

  async componentDidMount() {
    let routes = this.isInRole(await this.props.routesFactory());
    this.setState({ routes });
  }

  componentDidUpdate() {
    document.documentElement.scrollTop = 0;

    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }

    // (this.refs.mainContent as HTMLDivElement).scrollTop = 0;
  }

  isInRole(routes: RouteDefinition[]): RouteDefinition[] {
    return routes.filter(route => !route.role || hasRole(route.role));
  }

  getBrandText = () => {
    const { routes } = this.state;

    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.pathname.indexOf(routes[i].path) !== -1
      ) {

        return routes[i].name
      }
    }

    return "";
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={this.state.routes}
          bgColor=''
          logo={{
            innerLink: "/admin/index",
            imgSrc: "/logo.png",
            imgAlt: "Logo AllInvest X"
          }}
        />
        <div className="main-content">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText()}
          />
          <UserHeader />
          {this.props.children}
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    );
  }
}

export default AdminLayout;
