// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div class="App">
//       <header class="App-header">
//         <img src={logo} class="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           class="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";

function App() {
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
        
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  </section>
  );
}

export default App;

