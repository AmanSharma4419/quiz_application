import React from "react";
import { FaUserTie } from "react-icons/fa";

class UserRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "300px",
            display: "flex",
            marginLeft: "38%",
            marginTop: "10%"
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <h1 style={{ marginLeft: "35%" }}>UserRegistration</h1>
            <FaUserTie size={40} />
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Username"
                  name="userName"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i class="far fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  className="button is-success"
                  type="submit"
                  style={{ marginLeft: "37%" }}
                >
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default UserRegister;
