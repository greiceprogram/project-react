import React from "react";
import "./App.css";

// import DropdownMenu from "./hooks/components/DropdownMenu/src";
import Navbar from "./hooks/components/Navbar";
import { Route, Routes } from "react-router-dom";
import TeamComposition from "./components/Team"
// import Accordion from "./hooks/components/Accordion";


// import { Header } from "./styles/styled-component/components/Header/src/pattern/composition";




// import Square from "./styles/styled-component/components/Square";

// // import ContactComposition from "./components/Contact"
// import TeamComposition from "./components/Team";

// function App() {
//   return (

//     <body>
        
//       <Header.Title  />
      
//     </body>
//   );
// }

// function App() {


//   return (

//     <body>

//       <Navbar />   
  
//     </body>
//   );
// }

function Home() {
  return (
    <Navbar />
  )
}

function App() {
  return (
    <body>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/teams" Component={TeamComposition} />
      </Routes>
    </body>
  );
}


export default App;





// function App() {
//   return (
//     <body>
//       <ContactComposition />
      
//     </body>
//   );
// }

// function App() {
//   return (
//     <body>
//       <TeamComposition />
//     </body>
//   );
// }


// function App() {
//   return (

//     <body>

//       <Square borderStyle= "dotted" />
      
//     </body>
//   );
// }

// function App() {
//   return (

//     <body>

//       <Square  />
      
//     </body>
//   );
// }

