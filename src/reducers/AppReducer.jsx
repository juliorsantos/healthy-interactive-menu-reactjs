
const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        app: {
          language: action.payload
        }
      };
    case 'ADD_CART':
      const checkProduct = state.cart.filter(item => item.id === action.payload.id);

      if (!checkProduct[0]) {
        action.payload.qty = 1;
        state.cart.push(action.payload);
        return {
          ...state
        }
      }

      const newCartList = state.cart.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qty: item.qty + 1
          }
        } else {
          return item;
        }
      })

      if (!newCartList) {
        return state;
      }

      return { ...state, cart: newCartList };
    case 'ORDER':
      state.cart = [];
      return { ...state }
    default:
      return state;
  }
}

export default reducers;