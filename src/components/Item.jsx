import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from './../context/AppContext';
import LANGS from './../assets/languages.json';

const Item = ({ data }) => {

  const [state, dispatch] = useContext(Context);
  const navigator = useNavigate();

  function moneyFormatter(price) {
    // console.log(LANGS);
    if(!state.app.language) return price;
    // After we will move and change it.

    const currencyFilter = LANGS.filter(item => item.sign === state.app.language);

    if(!currencyFilter.length) return price;

    const { sign, currency } = currencyFilter[0];
    console.log(currency);
    console.log(sign);
    // return price;
    
    // return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    if(currency.exchangeRate) {
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
        <button className='flex-fill m-1 btn btn-success' type='button'>
          🛒 Order
        </button>
      </div>
    </div>
  )

}

export default Item;