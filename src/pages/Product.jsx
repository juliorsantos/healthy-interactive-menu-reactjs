import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosApi from "../lib/Api";

import Header from './../components/Header';

const Product = () => {

  const params = useParams();
  const navigator = useNavigate();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (!params.id) {
      navigator('/', { replace: true });
    }

    axiosApi.get('/products/' + params.id)
    .then(res => {
      if(!res.data) {
        toast.error('Sorry. We can\'t search this food.')
        return;
      }

      setProduct(res.data);
    })
    .catch(err => {
      toast.error('Sorry. We can\'t search this food. [Internal Error]')
    })
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