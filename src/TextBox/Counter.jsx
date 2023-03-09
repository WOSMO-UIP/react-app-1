// import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react';
const Counter = (props) => {
  const[text,setText] = useState("enter text here");
  // setText("NEW TEXT");
  return (
    <div className="container bg-danger ">
      <h1>{props.heading}</h1>
      <textarea className="form-control" placeholder={text}></textarea>
      <label htmlFor="floatingTextarea">{props.commment}</label>
      <div className="btn btn-primary">{props.btn}</div>
    </div>

  )
}

export default Counter



// import React, { Component } from 'react'

// export class Counter extends Component {
//   state = {
//     counter : 0,
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <span><h1>{this.formateounter()}</h1></span>
//         <button className="btn btn-primary">
//           <b>Increment</b> 
//         </button>
//       </React.Fragment>
//     );
//   }
//   formateounter(){
//     const {counter} = this.state;
//     return counter === 0 ? <h1>Zero</h1> : counter;
//   }
// }
// export default Counter