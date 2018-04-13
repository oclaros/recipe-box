import React from "react";
import cssStyles from "./Instruction.css";
import { Row, Col, Button } from "reactstrap";

const Instruction = props => (
  <Row className="i-row">
    <Col md="10">
      <textarea
        className="form-control"
        cols="10"
        row="4"
        value={props.instruction}
      />
    </Col>
    <Col md="2">
      <Button color="danger">Delete</Button>
    </Col>
  </Row>
);

export default Instruction;
