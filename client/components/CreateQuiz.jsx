import React from "react";

import { questionAction } from "../actions/questionAction";
import { connect } from "react-redux";
import swal from "sweetalert";

class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      url: "",
      questions: []
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.state.questions.push(this.state.question);
    this.setState({ question: "" });
  };

  handleSubmit = e => {
    e.preventDefault();
    var contentData = {
      questions: this.state.questions,
      resource: this.state.url
    };
    this.setState({ url: "" });
    if (!contentData.questions || !contentData.resource) {
      return swal({
        title: "Sorry",
        text: "Both Questions And Resource Are Mandatory",
        icon: "error",
        button: "Go Back"
      });
    } else if (
      contentData.questions.length > 5 ||
      contentData.questions.length < 5
    ) {
      return swal({
        title: "Sorry",
        text: "You Can Add Only 5 Questions",
        icon: "error",
        button: "Go Back"
      });
    } else {
      this.props.questionAction(contentData);
    }
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
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Create Quiz Questions</p>
            <p className="subtitle">Add A Resource Url</p>
            <center>
              <form type="sub">
                <div>
                  <input
                    style={{ width: "30%" }}
                    className="input"
                    type="text"
                    placeholder="Enter Question"
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <button className="button is-link" onClick={this.handleInput}>
                  Add
                </button>
                <hr width="30%" />
                <div>
                  <input
                    style={{ width: "30%" }}
                    className="input"
                    pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
                    type="url"
                    placeholder="Enter Url"
                    name="url"
                    value={this.state.url}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <button
                  className="button is-link"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Create
                </button>
              </form>
            </center>
            <figure className="image is-4by2"></figure>
          </article>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { questionAction })(CreateQuiz);
