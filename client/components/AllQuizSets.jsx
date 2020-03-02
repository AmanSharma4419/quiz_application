import React from "react";
import { connect } from "react-redux";
import { allQuizAction } from "../actions/allQuizAction";

class AllQuizSets extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <article class="tile is-child notification is-primary">
          <p class="title">All-Quizes</p>
          <p class="subtitle">
            Attend The One Then You Will Be Level Up On The Basis Of Your
            Response
          </p>
        </article>
        <div class="card"></div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { allQuizAction })(AllQuizSets);
