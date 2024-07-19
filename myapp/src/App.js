//Class based components 
// import {Component} from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hi, my name is Aryan</h1>
//         <div>
//           <h2>My favorite foods:</h2>
//           <ol>
//             <li>Chicken Biryani</li>
//             <li>Chicken Shawarma</li>
//             <li>Chicken Burger</li>
//           </ol>
//         </div>
//       </div>
//     )
//   }
// }


// Function components are the simplest way to define a component in React.
// function App() {
//   return <section>
//     <h1>Hi, my name is Aryan</h1>
//     <div>
//       <h2>My favorite foods:</h2>
//       <ol>
//         <li>Chicken Biryani</li>
//         <li>Chicken Shawarma</li>
//         <li>Chicken Burger</li>
//       </ol>
//     </div>
//   </section>
// }

// export default App;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  return _jsxs("section", {
    children: [_jsx("h1", {
      children: "Hi, my name is Aryan"
    }), _jsxs("div", {
      children: [_jsx("h2", {
        children: "My favorite foods:"
      }), _jsxs("ol", {
        children: [_jsx("li", {
          children: "Chicken Biryani"
        }), _jsx("li", {
          children: "Chicken Shawarma"
        }), _jsx("li", {
          children: "Chicken Burger"
        })]
      })]
    })]
  });
}
export default App;