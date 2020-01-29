import React from "react";

class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      url: ""
    };
  }

  handleData = e => {
    e.preventDefault();
    var questions = [];
    questions.push(this.state.question);
    this.setState({ question: "" });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <React.Fragment>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Create Quiz Questions</p>
            <p class="subtitle">Add A Resource Url</p>
            <center>
              <form type="sub">
                <div>
                  <input
                    style={{ width: "40%" }}
                    className="input"
                    type="text"
                    placeholder="Enter Question"
                    name="question"
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <button className="button is-link" onClick={this.handleData}>
                  Add
                </button>
                <hr width="40%" />
                <div>
                  <input
                    style={{ width: "40%" }}
                    className="input"
                    pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
                    type="url"
                    placeholder="Enter Url"
                    name="url"
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <button className="button is-link" type="submit">
                  Create
                </button>
              </form>
            </center>
            <figure class="image is-4by2"></figure>
          </article>
        </div>
      </React.Fragment>
    );
  }
}
export default CreateQuiz;
