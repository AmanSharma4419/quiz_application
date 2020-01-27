import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage./Homepage";
import AdminLogin from "./components/AdminLogin";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/user-register" component={UserRegister} />
        <Route path="/user-login" component={UserLogin} />
      </Router>
    </React.Fragment>
  );
}
export default App;
