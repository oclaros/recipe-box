import React from "react";
import cssStyles from "./Ingredient.css";
import { Row, Col, Input, Button } from "reactstrap";
/*
const Ingredient = props => (
  <Row className="i-row">
        <Col md="10">
          <Input
            value={props.ingredient}
            key={props.id}
            onChange={ (event) => {props.updateIngredientHandler(event, props.id )}}
          />
        </Col>
        <Col md="2">
          <Button color="danger">Delete</Button>
        </Col>
      </Row>
    
);
*/

class Ingredient extends React.Component {
  constructor(props) {
    super();
    this.state = { ingredient: "" };
    this.ingredientListChangeHandler = this.ingredientListChangeHandler.bind(
      this
    );
  }

  componentDidMount() {
    this.setState({ ingredient: this.props.ingredient });
  }
  ingredientListChangeHandler(event) {
    event.preventDefault();
    this.setState({ ingredient: event.target.value });
  }
  render() {
    return (
      <Row className="i-row">
        <Col md="8">
          <Input
            value={this.state.ingredient}
            key={this.props.id}
            onChange={event => {
              this.ingredientListChangeHandler(event, this.props.id)
            }}
          />
        </Col>
        <Col md="2">
          <Button
            color="secondary"
            onClick={(event) => this.props.updateIngredientHandler(event, this.props.id, this.state.ingredient)}
          >
            Update
          </Button>
        </Col>
        <Col md="2">
          <Button color="danger">Delete</Button>
        </Col>
      </Row>
    );
  }
}

export default Ingredient;
