

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
    
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './TextBox/Counter'


import React, { Component } from 'react'

export default class App extends React.Component {
  render() {
    return (
          <Counter heading="Text box" btn="click me" comment="i am a comment" />  
    )
  }
}
