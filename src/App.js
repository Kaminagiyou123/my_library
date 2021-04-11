import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
