import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage./Homepage";
import AdminLogin from "./components/AdminLogin";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import AdminDashboard from "./components/AdminDashboard";
import CreateQuiz from "./components/CreateQuiz";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/create-quiz" component={CreateQuiz} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/user-register" component={UserRegister} />
        <Route path="/user-login" component={UserLogin} />
        <Route path="/user-profile" component={UserProfile} />
      </Router>
    </React.Fragment>
  );
}
export default App;
