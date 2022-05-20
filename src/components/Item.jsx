import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from './../context/AppContext';
import LANGS from './../assets/languages.json';

const Item = ({ data }) => {

  const [state, dispatch] = useContext(Context);
  const navigator = useNavigate();

  function moneyFormatter(price = 0) {
    if (!state.app.language || !price) return price;

    const currencyFilter = LANGS.filter(item => item.sign === state.app.language);

    if (!currencyFilter.length) return price;

    const { sign, currency } = currencyFilter[0];

    if (currency.exchangeRate) {
      price = price * currency.exchangeRate
    }

    return Intl.NumberFormat(sign, { style: 'currency', currency: currency.style }).format(price);
  }

  return (
    <div className="product-item">
      <div className="image-wrapper">
        <img src={data.image} />
      </div>
      <h3 className='title'>{data.name}</h3>
      <h5 className='price'>{moneyFormatter(data.price)}</h5>
      <div className="btns d-flex flex-fill">
        <button
          onClick={() => navigator('/products/' + data.id)}
          className='flex-fill m-1 btn btn-secondary'
          type='button'>
          ℹ Details
        </button>
        <button
          onClick={() => dispatch({ type: 'ADD_CART', payload: data })}
          className='flex-fill m-1 btn btn-success'
          type='button'>
          🛒 Order
        </button>
      </div>
    </div>
  )

}

export default Item;