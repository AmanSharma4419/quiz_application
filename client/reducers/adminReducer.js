const adminState = {
  adminData: "",
  isAdminLogginIn: false,
  isAdminLoggedIn: false
};

function adminReducer(state = adminState, action) {
  try {
    switch (action.type) {
      case "ADMIN_LOGIN_START":
        return {
          ...state,
          isAdminLogginIn: true
        };
      case "ADMIN_LOGIN_COMPLETED": {
        return { ...state, adminData: action.payload, isAdminLoggedIn: true };
      }
      default: {
        return state;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

export default adminReducer;
