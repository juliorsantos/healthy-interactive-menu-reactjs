import Banner from '../components/Banner';
import ProductList from './../../public/foods.json';

const Index = () => {

  function moneyFormatter(price) {
    // After we will move and change it.
    return price;
  }

  return (
    <>
      <Banner />
      <div className="container py-2">
        <h1 className='text-center py-4'>Order our delicious food</h1>
        <div className="row products-row">
          {ProductList && ProductList.map((item, key) => (
            <div className='col-lg-3 col-sm-12' key={key}>
              <div className="product-item">
                <div className="image-wrapper">
                  <img src={item.image} />
                </div>
                <h3 className='title'>{item.title}</h3>
                <h5 className='price'>{moneyFormatter(item.price)}</h5>
                <div className="btns d-flex flex-fill">
                  <button className='flex-fill m-1 btn btn-secondary' type='button'>
                    ℹ Details
                  </button>
                  <button className='flex-fill m-1 btn btn-success' type='button'>
                    🛒 Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )

}

export default Index;