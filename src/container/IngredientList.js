import React from 'react';
import Ingredient from '../components/Ingredient/Ingredient'


const IngredientList = props =>(
    <div>
        <h2>Ingredients:</h2>
    {props.ingList.map( (ing, idx) => { return <Ingredient  ingredient={ing.ingredient} key={idx} />})}
    </div>
)

export default IngredientList; 