import React from 'react';
import CssStyles from './Sidebar.css';

const Sidebar = (props) => 
    <aside className={CssStyles.sidebar}>
        <ul>
        {props.recipeNames ? 
            props.recipeNames.map( (name, idx) => { return <li key={idx}>{name}</li> }) :
            <p>no names!!!</p>
        }
        </ul>
    </aside>


export default Sidebar;