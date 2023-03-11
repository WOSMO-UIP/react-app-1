// CLASS BASE COMPONENT
// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css'
// export default class BtnCounter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 1,
//     };
//   }
// increment() {
//     if (this.state.counter / 10 ===1 ) {
//       return ; // don't update state if counter is already 10 or more
//     }

//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   }

//   render() {
//     return (
//     <React.Fragment>
//         <h1>

//         Counter is : {this.state.counter}
//         </h1>
//         <button onClick={()=>this.increment()}>click me</button>
//     </React.Fragment>
//     );
//   }
// }

// FUNCTION BASE COMPONENT
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function BtnCounter() {
  const [Counter, setCounter] = useState(1);

  const increment = () => {
    if (Counter >= 10) {
      return; // don't update state if counter is already 10 or more
    }
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <React.Fragment>
      <h1>Counter is : {Counter}</h1>
      <button onClick={increment}>click me</button>
    </React.Fragment>
  );
}

export default BtnCounter;
