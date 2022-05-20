
const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        app: {
          language: action.payload
        }
      };
      break;
    case 'ADD_CART':
      /**
       * If does not have any products
       */
      if (!state.cart.length) {
        const newPayload = action.payload;
        newPayload.qty = 1;
        state.cart.push(newPayload);
        return state;
      }

      /**
       * Else... add product
       */
      const newState = state.cart.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qty: parseInt(item.qty) + 1
          }
        } else {
          return item;
        }
      })

      return {
        ...state,
        cart: newState
      };
      break;
    default:
      return state;
      break;
  }
}

export default reducers;