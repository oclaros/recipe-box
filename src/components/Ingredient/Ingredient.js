import React from 'react';
import cssStyles from './Ingredient.css';

const Ingredient = props => (
    <div>
        <p>{props.ingredient}</p>
    </div>
)

/*
class Ingredient extends React.Component{

    render(){
        console.log("you have " + this.props.ingredient)
        return(
            <div>
        {this.props.ingredient}
    </div>
        )
    }
    
}
*/
export default Ingredient;