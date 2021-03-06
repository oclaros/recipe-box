import React, { Component } from "react";
import "./RecipeContainer.css";
import Sidebar from "./Sidebar";
import MainHeader from "../components/MainHeader/MainHeader";
import IngredientList from "./IngredientList";
import instructionList from "./InstructionList";
import InstructionList from "./InstructionList";
import { Container, Row, Col } from "reactstrap";

const recipes = [
  {
    id: "1",
    name: "Hot Cocoa",
    ingredientList: [
      { ingredient: "3 tablespoons cocoa powder" },
      { ingredient: "1 cup milk" },
      { ingredient: "2 teaspoons sugar" },
      { ingredient: "dash salt" }
    ],
    instructionList: [
      {
        instruction:
          "In a saucepan, heat milk over medium heat until almost boiling then turn off heat."
      },
      {
        instruction:
          "Add remaining ingredients and stir until smooth and frothy."
      },
      { instruction: "Pour hot cocoa in a cup and enjoy!!!" }
    ]
  },
  {
    id: "2",
    name: "PB&J",
    ingredientList: [
      { ingredient: "1 tbsp peanut butter" },
      { ingredient: "1 tbsp jelly (any kind you like)" },
      { ingredient: "2 slices of bread" }
    ],
    instructionList: [
      {
        instruction:
          "With a knife or spoon, spread peanut butter on one slice of bread. Next, spread jelly on the other slice of bread. Put the bread with the jelly on top of the bread with the peanut butter. The jelly should be on top of the peanut butter. Enjoy your sandwich."
      }
    ]
  },
  {
    id: "3",
    name: "Chocolate Pudding",
    ingredientList: [
      { ingredient: "3 tablespoons cornstarch" },
      { ingredient: "3/4 cup sugar" },
      { ingredient: "3/4 cup cocoa powder" },
      { ingredient: "1/8 teaspoon salt" },
      { ingredient: "1 tablespoons butter or coconut oil" },
      { ingredient: "1 teaspoon vanilla" },
      { ingredient: "3 egg yolks, beaten" },
      { ingredient: "2 cups milk" }
    ],
    instructionList: [
      {
        instruction:
          "In a saucepan, combine cornstarch, sugar, cocoa powder, salt. Add milk slowly to create a smooth mixture. Heat saucepan until mixture thickens and is velvety. Do not allow to boil."
      },
      {
        instruction:
          "In a bowl, add eggs, then add half of the milk mixture slowly. Do not add hot milk mixture too quickly to eggs or else you will have scrambled chocolate eggs. Once the eggs and milk mixture is combine, add it to the saucepan slowly while constantly stirring. Bring to a boil while constantly stirring the mixture. It should be very thick. Remove saucepan from heat and stir about a two minutes more."
      },
      {
        instruction:
          "Pour into cups or a bowl and put into refrigerator until cool."
      }
    ]
  },
  {
    id: "4",
    name: "Christmas Cookies",
    ingredientList: [
      { ingredient: "1 ½ cups of soft butter" },
      { ingredient: "2 c white sugar" },
      { ingredient: "4 eggs" },
      { ingredient: "1 tea vanilla" },
      { ingredient: "5 c flour" },
      { ingredient: "2 tea baking powder" },
      { ingredient: "1 tea salt" }
    ],
    instructionList: [
      { instruction: "Preheat oven to 400 F degrees." },
      {
        instruction:
          "In a large bowl, cream butter and sugar. Beat in eggs, one at a time. Add vanilla. Stir in the remaining ingredients."
      },
      {
        instruction:
          "Let rest in refrigerator for at least 1 hour. Roll dough on floured surface. Cut cookies."
      },
      { instruction: "Bake for 6 to 8 minutes." }
    ]
  },
  {
    id: "5",
    name: "Apple Pie",
    ingredientList: [
      { ingredient: "1 recipe for double pie crust" },
      { ingredient: "1/2 cup sugar" },
      { ingredient: "1/4 cup (packed) brown sugar" },
      { ingredient: "2 tablespoons all purpose flour" },
      { ingredient: "1 tablespoon lemon juice" },
      { ingredient: "2 teaspoons grated lemon peel" },
      { ingredient: "1/4 teaspoon vanilla extract" },
      { ingredient: "1 teaspoon cinnamon" },
      { ingredient: "1/8 teaspoon ground nutmeg (optional)" },
      {
        ingredient: "3 pounds Granny Smith apples, peeled, cored, thinly sliced"
      },
      { ingredient: "milk" },
      { ingredient: "additional sugar" }
    ],
    instructionList: [
      {
        instruction:
          "Position rack in lowest third of oven and preheat to 400°F."
      },
      {
        instruction:
          "Mix first 6 ingredients in large bowl. Add apples and toss to blend."
      },
      {
        instruction:
          "Roll out 1 dough disk on floured surface to 12-inch round. Transfer to 9-inch-diameter pie dish. Fold edge under, forming high-standing rim; crimp. Add filling"
      },
      {
        instruction:
          "Roll out second dough disk on floured surface to 13-inch round. Cut into twelve 1-inch-wide strips. Arrange 6 strips across pie. Form lattice by arranging 6 strips diagonally across first strips. Gently press ends into crust edges. Brush lattice with milk. Sprinkle lightly with additional sugar."
      },
      { instruction: "Bake pie 10 minutes." },
      {
        instruction:
          "Reduce oven temperature to 375°F. Continue baking until juices bubble thickly and crust is deep golden, covering edges with foil if browning too quickly, about 1 hour 20 minutes."
      },
      { instruction: "Cool on rack for 1 hour." },
      { instruction: "(Can be made 8 hours ahead. Let stand on rack.)" }
    ]
  }
];

const ingList = [
  { ingredient: "1/2 cup chocolate" },
  { ingredient: "1 cup milk" }
];

const instrList = [{ instruction: "Mix" }, { instruction: "Bake and eat!!!" }];

class RecipeContainer extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      recipeNames: [],
      curRecipe: null
    };

    this.initRecipes = this.initRecipes.bind(this);
    this.setRecipeNames = this.setRecipeNames.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
    this.renderCurrentRecipe = this.renderCurrentRecipe.bind(this);
    this.updateIngredient = this.updateIngredient.bind(this);
    this.updateInstruction = this.updateInstruction.bind(this);
  }

  componentDidMount() {
    this.initRecipes();
    this.setRecipeNames();
  }

  initRecipes() {
    this.setState({ recipes: recipes });
  }

  setRecipeNames() {
    const names = recipes.map(recipe => {
      return { id: recipe.id, name: recipe.name };
    });
    this.setState({ recipeNames: names });
  }
  getRecipe(e, recipeId) {
    e.preventDefault();
    const curRecipe = this.state.recipes.find(recipeItem => {
      if (recipeItem.id === recipeId) return recipeItem;
    });
    this.setState({ curRecipe: curRecipe });
  }
  /* We know that this ingredient is part of the current recipe. We do not need to pass the current recipe id back. */
  updateIngredient(event, idx, ingredient) {
    event.preventDefault();
    if (!ingredient || idx < 0 || idx > this.state.curRecipe.ingredientList.length ) return;
    let curRecipe = Object.assign({}, this.state.curRecipe);
    let curIngLst = [...curRecipe.ingredientList];
    curIngLst[idx] = ingredient;
    curRecipe.ingredientList = curIngLst;
    this.setState({curRecipe : curRecipe});
  }
  updateInstruction(event, idx, instruction) {
    event.preventDefault();
    if (!instruction || idx < 0 || idx > this.state.curRecipe.instructionList.length ) return;
    let curRecipe = Object.assign({}, this.state.curRecipe);
    let curInstLst = [...curRecipe.instructionList];
    curInstLst[idx] = instruction;
    curRecipe.instructionList = curInstLst;
    this.setState({curRecipe : curRecipe});
  }
/*
  updateObjectInArray(arr, idx, item){
    return array.map( (curItem, idex) => {
      if(index !== idx) {
          // This isn't the item we care about - keep it as-is
          return curItem;
      }
 
      // Otherwise, this is the one we want - return an updated value
      return {
          ...curItem,
          ...item
      }
  }
*/
  renderCurrentRecipe() {
    const { curRecipe } = this.state;
    if (curRecipe) {
      return (
        <div>
          <MainHeader title={curRecipe.name} />
          <IngredientList
            ingList={curRecipe.ingredientList}
            updateIngredientHandler={this.updateIngredient}
          />
          <hr />
          <InstructionList instrList={curRecipe.instructionList} />
        </div>
      );
    } else {
      return (
        <p>
          Please select a recipe on the right or click the{" "}
          <strong>Add Recipe</strong> button to add a new recipe.
        </p>
      );
    }
  }

  render() {
    return (
      <Container className="mainContainer">
        <h1 className="appTitle">Recipe Box</h1>
        <hr />
        <Row>
          <Col md="8" className="recipeContainer">
            {this.renderCurrentRecipe()}
          </Col>
          <Col md="4" className="sidebar">
            <Sidebar
              recipeNames={this.state.recipeNames}
              getRecipe={this.getRecipe}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default RecipeContainer;
