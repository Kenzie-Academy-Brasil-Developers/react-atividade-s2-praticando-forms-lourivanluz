import { Route, Switch } from "react-router";
import "./App.css";
import { FormPage } from "./components/pages/FormPage";
import { HomePage } from "./components/pages/HomePage";
import { Login } from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/form">
          <FormPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
