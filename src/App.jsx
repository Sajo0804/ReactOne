// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoList from '/components/TodoList'
import BasicForm from '/components/BasicForm'
import CounterComponent from '../components/Counter'
import StarWars from '../components/StarWars'

// function App() {

//   return (
//     <>
//           <TodoList/>
//           <BasicForm/>
//           <CounterComponent/>
//       <StarWars 
//       />
//     </>
//   )
// }


// export default App;

function App() {
  const character = { name: "Yoda" };

  return (
    <>
     <TodoList/>
         <BasicForm/>
<br/>      <StarWars 
        character={character}
      />
               <CounterComponent/>

    </>
  );
}

export default App;