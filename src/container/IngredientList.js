import React from "react";
import Ingredient from "../components/Ingredient/Ingredient";
import { Row, Col, Input, Button } from "reactstrap";
/*
const IngredientList = props => (
  <div>
    <h2>Ingredients:</h2>
    {props.ingList.map((ing, idx) => {
      return <Ingredient ingredient={ing.ingredient} key={idx} updateIngredientHandler={props.updateIngredient}/>;
    })}
    <Row className="i-row">
      <Col md="10">
        <Input value="" />
      </Col>
      <Col md="2">
        <Button color="primary">Add</Button>
      </Col>
    </Row>
  </div>
);
*/
class IngredientList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Ingredients:</h2>
        {this.props.ingList.map((ing, idx) => {
          return (
            <Ingredient
              ingredient={ing.ingredient}
              key={idx}
              id={idx}
              updateIngredientHandler={this.props.updateIngredientHandler}
            />
          );
        })}
        <Row className="i-row">
          <Col md="10">
            <Input value="" />
          </Col>
          <Col md="2">
            <Button color="primary">Add</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
export default IngredientList;
