import { useNavigate } from "react-router-dom";

const Item = ({ data }) => {

  const navigator = useNavigate();

  function moneyFormatter(price) {
    // After we will move and change it.
    return price;
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