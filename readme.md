# recipe-box

The purpose of this application is to demonstrate creating a react application. This application will allow the user to add, remove and maintain recipes.

## Motivation
This is based on the FreeCodeCamp challange project called **[Build a Recipe Box](https://www.freecodecamp.org/challenges/build-a-recipe-box "Build a Recipe Box")**.

## Prerequisites
You will need to install the following using yarn or npm:
* Either use [create-react-app](https://github.com/facebook/create-react-app "create react app") or you will need to setup the React environment yourself. ***Note: I have created a very basic React setup called [barebones-react](https://github.com/oclaros/barebones-react "barebones-react")***

You will need css-loader and styles-loader for webpack to load/inject css

## Installing
Because I use bootstrap 4, webpack.confi.js that I use from **barebones-react** must be modified to remove the options in the css-loader. The result should look like 
```
{
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }]
}
```
*(SEE Boostrap's documentation on  [Importing Compiled CSS](https://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-compiled-css))*

## Run the app

## Built With
w

## Author

* **Oscar Claros** - ***Initial Work*** - [oclaros](https://github.com/oclaros)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
* Hat tip to [FreeCodeCamp](https://www.freecodecamp.org "FreeCodeCamp") and to coders that love to learn!!!