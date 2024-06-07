import "./App.css"
import DropdwnMenu from "./hooks/components/DropdwnMenu/src";

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

function App() {

  const pages = [
    {
        title: "Page one",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },

    {
      title: "Page one",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing."
  },

  {
    title: "Page one",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing."
},

{
  title: "Page one",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing."
}
]

  return (

    <body>
        
      <DropdwnMenu pages={pages} />
      
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

