import React from "react";
import { connect } from "react-redux";
import { FaUserTie } from "react-icons/fa";

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            marginLeft: "39%",
            marginTop: "10%"
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <h1 style={{ marginLeft: "35%" }}>AdminLogin</h1>
            <hr />
            <center>
              <FaUserTie size={40} />
            </center>
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
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(AdminLogin);
