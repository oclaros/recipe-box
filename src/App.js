import React, { Component } from 'react';
import RecipeContainer from './container/RecipeContainer';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component{
    render(){
        return(
            <RecipeContainer />
        );        
    }
}

export default App;