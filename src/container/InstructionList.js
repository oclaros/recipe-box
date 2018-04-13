import React from "react";
import Instruction from "../components/Instruction/Instruction";
import { Row, Col, Input, Button } from "reactstrap";

const InstructionList = props => (
  <div>
    <h2>Instructions:</h2>
    {props.instrList.map((instr, idx) => {
      return <Instruction key={idx} instruction={instr.instruction} id={idx} />;
    })}
    <Row className="i-row">
      <Col md="10">
        <textarea className="form-control" cols='10' />
      </Col>
      <Col md="2">
        <Button color="primary">Add</Button>
      </Col>
    </Row>
  </div>
);

export default InstructionList;
