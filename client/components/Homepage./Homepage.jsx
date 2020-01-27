import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <React.Fragment>
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welcome To Quiz Application</h1>
            <h2 className="subtitle">
              Get Started With An Interactive Online Quiz Application Today.
            </h2>
            <h1 className="subtitle"> Join As</h1>
            <hr />
            <div>
              <Link to="/admin-login">
                <button
                  className="button is-primary"
                  style={{ width: "100px", marginRight: "30px" }}
                >
                  Admin
                </button>
              </Link>
              <Link to="/user-login">
                <button
                  className="button is-primary"
                  style={{ width: "100px" }}
                >
                  User
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Homepage;
