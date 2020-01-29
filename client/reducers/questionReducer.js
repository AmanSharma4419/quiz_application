const questionState = {
  questions: "",
  isQuestionLoading: false,
  isQuestionLoadded: false
};

function questionReducer(state = questionReducer, action) {
  try {
    switch (action.type) {
      case "QUESTION_LOADING_START":
        return {
          ...questionState,
          isQuestionLoading: true
        };
      case "QUESTION_LOADED_SUCESSFULLY":
        return {
          ...questionState,
          questions: action.payload,
          isQuestionLoadded: true
        };
      default: {
        return state;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

export default questionReducer;
