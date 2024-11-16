// Case 1 : to use arrow function

const App = () => (
  <div>
    <h2 className="title">Salut c'est moi Toto de react js</h2>
  </div>
);

// Case 2 : to use a class

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2 className="title">Salut c'est Toto..</h2>
//       </div>
//     );
//   }
// }

const container = document.getElementById('App');
const root = ReactDOM.createRoot(container);
root.render(<App />);
