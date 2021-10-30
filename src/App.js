import Home from "./Home";
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
 <Navbar />
 <Home style={ {backgroundColor:"red"} }/>
    </div>
  );
}

export default App;
