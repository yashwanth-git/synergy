const darkReducer = (state = false, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return !state;
    default:
      return state;
  }
};

export default darkReducer;
