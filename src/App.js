import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import About from "./components/Navbar/links/About";
import Contact from "./components/Navbar/links/Contact";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
