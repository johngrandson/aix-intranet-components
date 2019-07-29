import * as React from "react";
import { Component } from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © Todos os direitos reservados para {" "} 2019
              <a
                className="font-weight-bold ml-1"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                All InvestX
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
