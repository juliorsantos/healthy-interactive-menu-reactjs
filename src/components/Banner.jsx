import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import axiosApi from './../lib/Api';
import { Context } from "./../context/AppContext";

import BannerImage from "./../../public/images/banner.jpg";

const Banner = () => {
  
  const [state, dispatch] = useContext(Context);
  const [search, setSearch] = useState("");

  const searchProducts = () => {
    event.preventDefault();

    if (state.products) {
      axiosApi.get('/products?q=' + search)
      .then(res => {
        if(!res.data.length) {
          toast.info(search + ' doest not exists.');
          return;
        }

        dispatch({ type: 'SET_PRODUCTS', payload: res.data })
      })
      .catch(err => {
        toast.error('Error on searching your food. [Internal Error]')
      })
    }
  };

  useEffect(() => {
    if(search === '') {
      axiosApi.get('/products')
      .then(res => {
        if(!res.data.length) {
          toast.info(search + ' doest not exists.');
          return;
        }

        dispatch({ type: 'SET_PRODUCTS', payload: res.data })
      })
      .catch(err => {
        toast.error('Error on searching your food. [Internal Error]')
      })
    }
  }, [search]);

  return (
    <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="container">
        <div className="infos text-center py-4">
          <h1>Become healthier.</h1>
          <h5>Order here. Now!</h5>
        </div>
        <form onSubmit={() => searchProducts()}>
          <div className="input-group">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="form-control"
            />
            <button type="submit" className="btn btn-secondary">
              Search now 🔍
            </button>
          </div>
        </form>
      </div>
      <div className="banner-overlay"></div>
    </div>
  );
};

export default Banner;
