import React, { Component } from 'react';
import Home from "./pages/home"
import './App.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

// import Title from "./components/title"
// import { hola } from "./components/title"




class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <section>
          <Home></Home>
        </section>
      </MuiThemeProvider>
    );
  }
}
export default App;
