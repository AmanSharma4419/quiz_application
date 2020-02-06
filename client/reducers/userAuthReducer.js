const userState = {
  userData: "",
  isUserLoggingIn: false,
  isUserLoggedIn: false
};

function userAuthReducer(state = userState, action) {
  try {
    switch (action.type) {
      case "ADMIN_LOGGIN_START":
        return {
          ...userState,
          isUserLoggingIn: true
        };
      case "ADMIN_LOGIN_COMPLETED": {
        return {
          ...userState,
          isUserLoggedIn: true
        };
      }
      default: {
        
        return state;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

export default userAuthReducer;
