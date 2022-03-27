import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Example from "./components/example";
import ExampleF from "./components/exampleF";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="class-component" element={<Example />} />
          <Route path="functional-component" element={<ExampleF />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
