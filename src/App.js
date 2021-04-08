import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ManageItems from "./pages/admin/ManageItems";
import Items from "./pages/Items";
import Item from "./pages/Item";
import CreateItem from "./pages/admin/CreateItem";
import UpdateItem from "./pages/admin/UpdateItem";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />

        <Switch>
          <Route path="/" exact component={Items} />
          <Route path="/adim/manage-movies" component={ManageItems} />
          <Route path="/adim/manage-create" component={CreateItem} />
          <Route path="/movies/:id" component={Item} />
          <Route path="/update-movie/:id" component={UpdateItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
