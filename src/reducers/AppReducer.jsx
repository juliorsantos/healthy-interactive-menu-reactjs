const reducers = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        app: {
          language: action.payload
        }
      };
    default:
      return state;
  }
}

export default reducers;