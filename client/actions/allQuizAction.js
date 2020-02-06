export const allQuizAction = () => {
  try {
    return dispatch => {
      fetch("http://localhost:3000/api/v1/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(res => res.json())
        .then(quizSets => {
          dispatch({ type: "QUIZ_LOADING_COMPLETELY", payload: quizSets });
        });
    };
  } catch (err) {
    return console.log(err.message);
  }
};

export default allQuizAction;
