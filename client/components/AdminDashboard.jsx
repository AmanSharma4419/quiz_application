import React from "react";

import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section class="hero is-info is-medium">
          <div class="hero-body">
            <div class="container">
              <FaUserShield size={100} />
              <h1 class="title">Welcome To AdminDashboard</h1>
              <h2 class="subtitle">
                Here You Can Create Quizes ,Check Responses ,And Assign Marks !
              </h2>
              <hr />
              <div>
                <Link to="/create-quiz">
                  <button
                    className="button is-primary"
                    style={{ width: "100px", marginRight: "30px" }}
                  >
                    Create Quiz
                  </button>
                </Link>
                <Link to="#">
                  <button
                    className="button is-primary"
                    style={{ width: "100px" }}
                  >
                    Feedbacks
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
