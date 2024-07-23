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

// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// function App() {
//   return _jsxs("section", {
//     children: [_jsx("h1", {
//       children: "Hi, my name is Aryan"
//     }), _jsxs("div", {
//       children: [_jsx("h2", {
//         children: "My favorite foods:"
//       }), _jsxs("ol", {
//         children: [_jsx("li", {
//           children: "Chicken Biryani"
//         }), _jsx("li", {
//           children: "Chicken Shawarma"
//         }), _jsx("li", {
//           children: "Chicken Burger"
//         })]
//       })]
//     })]
//   });
// }

// import Add from "./components/Add";
// import Greetings from "./components/Greetings";

// //import { Fragment } from "react";

// function App() {
//   return (
//     <>
//     {/* <Fragment> */}
//       <Add />
//       <Greetings />
//       <form>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" />
//         <button>Submit</button>
//       </form>
//     {/* </Fragment> */}
//     </>

//   );
// }

// export default App;

// import Component from "./components/Component";
// import Lists from "./components/Lists";
// import Props from "./components/Props";

// function App() {
//   return (
//     <>
//       <Component />
//       <Lists />
//       <Props 
//         img = "https://en.wikipedia.org/wiki/File:IchigoKurosakiBleach.jpg"
//         name="Aryan"
//         age = {18}
//         hobbies={["acting", "being the main character"]}
//       >
//         <h1>lorem</h1>
//         <p>lorem20</p>
//       </Props>
//     </>
//   )
// }

// export default App;


import Counter from "./components/Counter";
import Password from "./components/If-Password";


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Password isValid={true} />
      <Password isValid={0} />
      <button onMouseEnter={() => console.log(Date() )}>The time is?</button>

      <Counter />
    </>
  )
}

export default App;