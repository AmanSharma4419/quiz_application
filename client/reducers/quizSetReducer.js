const quizSetState = {
  quizSets: "",
  isQuizLoading: "",
  isQuizLoaded: ""
};

function quizSetReducer(state = quizSetState, action) {
  try {
    switch (action.type) {
      case "QUIZ_LOADING_START":
        return {
          ...quizSetState,
          isQuizLoading: true
        };
      case "QUIZ_LOADING_COMPLETELY":
        return {
          ...quizSetState,
          isQuizLoading: false,
          quizSets: action.payload
        };
      default: {
        return state;
      }
    }
  } catch (err) {
    return console.log(err.message);
  }
}
export default quizSetReducer