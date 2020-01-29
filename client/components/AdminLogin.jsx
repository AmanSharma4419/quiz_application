import React from "react";
import swal from "sweetalert";
import { adminAction } from "../actions/adminAction";
import { connect } from "react-redux";
import { FaUserTie } from "react-icons/fa";
import validator from "validator";
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
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };

    if (!credentials.email || !credentials.password) {
      return swal({
        title: "Sorry",
        text: "Email And Password Are Must",
        icon: "error",
        button: "Go Back"
      });
    } else if (!validator.isEmail(credentials.email)) {
      return swal({
        title: "Sorry",
        text: "Please Enter Valid Email",
        icon: "error",
        button: "Go Back"
      });
    } else {
      this.props.adminAction(credentials);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "lightgreen"
          }}
        >
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
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { adminAction })(AdminLogin);
