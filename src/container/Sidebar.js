import React, { Component } from "react";
import CssStyles from "./Sidebar.css";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.searchTermOnChangeHandler = this.searchTermOnChangeHandler.bind(this);
  }
  searchTermOnChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { recipeNames } = this.props;
    const data = recipeNames
      .filter(
        item =>
          item.name
            .toUpperCase()
            .indexOf(this.state.searchTerm.toUpperCase()) >= 0
      )
      .map(i => {
        return i;
      });

    return (
      <aside className={CssStyles.sidebar}>
        <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <i className="fa fa-search" />
            </InputGroupAddon>
            <Input
              placeholder="search"
              onChange={this.searchTermOnChangeHandler}
              value={this.state.searchTerm}
            />
          </InputGroup>
        </div>

        {data.length > 0 ? (
          <div>
            <ul>
              {data.map((item) => {
                return (
                  <li
                    className="recipe-name-list"
                    key={item.id}
                    onClick={e => this.props.getRecipe(e, item.id)}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p>no data to select</p>
        )}
      </aside>
    );
  }
}

export default Sidebar;
