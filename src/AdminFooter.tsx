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
              © ALL INVESTX - 2019. Todos os direitos reservados.
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
