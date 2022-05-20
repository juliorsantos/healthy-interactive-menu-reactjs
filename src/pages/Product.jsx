import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from './../components/Header';

import ProductList from './../../public/foods.json';

const Product = () => {

  const param = useParams();
  const navigator = useNavigate();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (!param.id) {
      navigator('/', { replace: true });
    }

    /**
     * Get the product
     */
    const getProduct = ProductList.filter(item => item.id == param.id);

    if (!getProduct.length) {
      navigator('/');
    }

    /**
     * Then set the product
     */
    setProduct(getProduct[0])
  }, []);

  return (
    <>
      <Header />
      <div className="container py-4">
        <h1 className="text-center">{product.name}</h1>
        <div className="row py-3">
          <div className="col-lg-6 col-sm-12">
            <img src={product.image} alt={product.name} className='w-100 img-fluid rounded' />
          </div>
          <div className="col-lg-6 col-sm-12">
            <p>{product.description}</p>
            <div className="btns">
              <button type="button" onClick={() => navigator('/')} className="btn btn-sm btn-primary">
                &#8592; Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Product;