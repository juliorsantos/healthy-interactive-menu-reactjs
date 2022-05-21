import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from './../context/AppContext';
// import LANGS from './../assets/languages.json';
import { toast } from "react-toastify";
import { currencyFormatter } from './../lib/Currency';

const Item = ({ data }) => {

  const navigator = useNavigate();
  const [state, dispatch] = useContext(Context);

  const getPrice = (price) => {
    return currencyFormatter(price, state.app.locale);
  }

  const addToCart = (data) => {
    if(!data || !data.id) {
      toast.error('Error on adding the product.');
    }

    toast.success('Added to the cart!');
    dispatch({ type: 'ADD_CART', payload: data });
    return;
  }

  return (
    <div className="product-item">
      <div className="image-wrapper">
        <img src={data.image} />
      </div>
      <h3 className='title'>{data.name}</h3>
      <h5 className='price'>{getPrice(data.price)}</h5>
      <div className="btns d-flex flex-fill">
        <button
          onClick={() => navigator('/products/' + data.id)}
          className='flex-fill m-1 btn btn-secondary'
          type='button'>
          ℹ Details
        </button>
        <button
          onClick={() => addToCart(data)}
          className='flex-fill m-1 btn btn-success'
          type='button'>
          🛒 Order
        </button>
      </div>
    </div>
  )

}

export default Item;