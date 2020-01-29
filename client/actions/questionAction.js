export const questionAction = contentData => {
  try {
    return dispatch => {
      fetch("http://localhost:3000/api/v1/create/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contentData)
      })
        .then(res => res.json())
        .then(questions => {
          console.log(questions, "getting the responses");
          dispatch({ type: "QUESTION_LOADED_SUCESSFULLY", payload: questions });
        });
    };
  } catch (err) {
    console.log(err.message);
  }
};
