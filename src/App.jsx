// import React from 'react'
// import Counter from './TextBox/Counter'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Counter from './TextBox/Counter'

// function App() {
//     return (
//         <Counter heading="Text box" btn="click me" comment="i am a comment" />
//       )
//     }

//     export default App

import "bootstrap/dist/css/bootstrap.min.css";
// import Counter from "./TextBox/Counter";
import BtnCounter from "./codeStoicPractice/BtnCounter";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      < BtnCounter />
      // <Counter heading="Text box" btn="click me" comment="i am a comment" />
    );
  }
}
