// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div classname="App">
//       <h1 className>Hey There!! I am Dora the explorer !!<br>
//         Help me finding some sense in life !</h1>
//       )
//       ]
//     </div>
//   );
// }

// import { Component } from 'react';

// class App extends Component {

//   state = {
//     name: "Aakash", branch: "EXTC", todo: ["JK", "BK"]
//   }
//   logBranch() {
//     console.log(this.state.branch)
//   }

//   render() {
//     this.logBranch();
//     return (
//       <div className="App">

//         <h1>Hey There!! I am {this.state.name}, the explorer !!</h1>
//         <h3>Help me finding some sense in life !</h3>
//       </div>

//     )
//   }
// }
// export default App;

// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react'

// function Heading() {
//   return (
//     <div><h1>Styling using Functional and Class Components</h1></div>
//   )
// }

// class ClassComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h3>To see Styling in Functional Component</h3>
//         <p>React is the most popular front-end JavaScript library in the field of web development. It is used by large, established companies and newly-minted startups alike (Netflix, Airbnb, Instagram, and the New York Times, to name a few). React brings many advantages to the table, making it a better choice than other frameworks like Angular.js.</p>
//       </div>
//     )
//   }
// }

// function FunctionalComponent() {
//   return (
//     <div>
//       <h3>To see Styling in Class Component</h3>
//       <p>The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.</p>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <Heading></Heading>
//       <ClassComponent></ClassComponent>
//       <FunctionalComponent></FunctionalComponent>
//     </div>
//   );
// }
// export default App;

// import logo from './logo.svg';
import "./App.css";
import { Component } from "react";
import FunctionalComponent from "./Components/functionalComponent";
import ClassComponent from "./Components/classComponent";

class RenderComponents extends Component {
  state = {
    isClassActive: false,
    isFunctionActive: false,
  };

  render() {
    return (
      <div className="App">
        <h1 id="mainHeading">Styling using Functional and Class Component</h1>

        <div className="ButtonDiv">
          <button
            onClick={() => {
              if (this.state.isFunctionActive === false) {
                this.setState({ isFunctionActive: true });
              }
              if (this.state.isFunctionActive) {
                this.setState({ isFunctionActive: false });
              }
            }}
          >
            To see styling in functional Component
          </button>
          <button
            onClick={() => {
              if (this.state.isClassActive === false) {
                this.setState({ isClassActive: true });
              }
              if (this.state.isClassActive) {
                this.setState({ isClassActive: false });
              }
            }}
          >
            {" "}
            To see styling in class component{" "}
          </button>
        </div>

        <div className="toggleContainer">
          <div
            style={{
              visibility: this.state.isFunctionActive ? "visible" : "hidden",
            }}
          >
            <FunctionalComponent />
          </div>

          <div
            style={{
              visibility: this.state.isClassActive ? "visible" : "hidden",
            }}
          >
            <ClassComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default RenderComponents;
