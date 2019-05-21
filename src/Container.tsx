import { CardBody, CardHeader, Card, Container, Row } from "reactstrap";
import * as React from "react";
import { ReactNode } from "react";

interface Props {
  title?: string;
  children?: ReactNode;
}

export default (props: Props) => (
  <Container fluid className="mb-4">
    <Row>
      <div className="col">
        <Card className="shadow">
          {
            props.title &&
            <CardHeader>
              <h3 className="mb-0">{props.title}</h3>
            </CardHeader>
          }
          <CardBody>
            {props.children}
          </CardBody>
        </Card>
      </div>
    </Row>
  </Container>
);
