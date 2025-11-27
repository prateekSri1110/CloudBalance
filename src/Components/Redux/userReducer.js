const initalState = {
  username: "Prateek Srivastava",
  email: "",
  password: "",
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ChangeName":
      return { ...state, username: action.payload };
    case "ChangeEmail":
      return { ...state, email: action.payload };
    case "ChangePassword":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
