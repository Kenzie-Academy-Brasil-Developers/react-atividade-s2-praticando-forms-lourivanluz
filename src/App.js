import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import { FormPage } from "./components/pages/FormPage";
import { HomePage } from "./components/pages/HomePage";
import { Login } from "./components/pages/Login";
import { PageUser } from "./components/pages/PageUser";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/form">
          <FormPage setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/pageUser">
          <PageUser user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
