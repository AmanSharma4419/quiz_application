import React from "react";

class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
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
          <h1 style={{ marginLeft: "35%" }}>AdminLogin</h1>
          <hr />

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
        </div>
      </React.Fragment>
    );
  }
}
export default CreateQuiz;
