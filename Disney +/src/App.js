import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// #################################   IMPORTS 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
