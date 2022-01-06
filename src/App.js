import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "./Context/Context";
import Home from "./Components/Home/Home";
import Onlyusers from "./Components/onlyUser/Onlyusers";

function App() {
  const [users, setUsers] = useState([]);
  const [userOnly, setUserOnly] = useState([]);
  const [usersName, setUsersName] = useState("");

  const ProviderValue = useMemo(
    () => ({ users, setUsers, userOnly, setUserOnly, usersName, setUsersName }),
    [users, setUsers, userOnly, setUserOnly, usersName, setUsersName]
  );

  return (
    <Context.Provider value={ProviderValue}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/u/" exact component={Onlyusers} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
