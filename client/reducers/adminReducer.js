const adminState = {
  adminData: "",
  isAdminLogginIn: false,
  isAdminLoggedIn: false
};

function adminReducer(state = adminState, action) {
  switch (action.type) {
    case "ADMIN_LOGIN_START":
      return {
        ...state,
        isAdminLogginIn: true
      };
    case "ADMIN_LOGIN_COMPLETED": {
      return { ...state, adminData: "", isAdminLoggedIn: true };
    }
  }
}

export default adminReducer;
