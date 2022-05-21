import { useContext, useEffect } from 'react';

import Item from './../components/Item';
import Banner from '../components/Banner';
import Header from '../components/Header';

import { Context } from '../context/AppContext';
import axiosApi from '../lib/Api';

const Index = () => {

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axiosApi.get('/products')
    .then(res => {
      dispatch({ type: 'SET_PRODUCTS', payload: res.data });
    })
    .catch(err => {
      toast.error('Can\'t load the products. [Internal Error]');
    })
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <div className="container py-2">
        <h1 className='text-center py-4'>Order our delicious food</h1>
        <div className="row products-row">
          {state.products && state.products.map((data, key) => (
            <div className='col-lg-3 col-sm-12' key={key}>
              <Item data={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  )

}

export default Index;