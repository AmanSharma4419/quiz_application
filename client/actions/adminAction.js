export const adminAction = credentials => {
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
        .then(admin => {
          localStorage.setItem("token", admin.token);
          dispatch({ type: "ADMIN_LOGIN_COMPLETED", payload: admin });
        });
    };
  } catch (err) {
    console.log(err.message);
  }
};
