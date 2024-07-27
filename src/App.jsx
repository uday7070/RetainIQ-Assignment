import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Content from "./components/Content";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />

      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
}

export default App;
