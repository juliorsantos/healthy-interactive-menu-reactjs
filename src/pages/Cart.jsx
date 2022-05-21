import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Header from '../components/Header';
import { currencyFormatter } from './../lib/Currency';
import { Context } from "../context/AppContext";

const Cart = () => {

  const navigator = useNavigate();

  const [state, dispatch] = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);

  const getPrice = (price) => {
    return currencyFormatter(price, state.app.locale);
  }

  const finishOrder = () => {
    toast.success('Ordered with successful.');
    dispatch({ type: 'ORDER' });
    return;
  }

  useEffect(() => {
    const calcTotalPrice = state.cart.reduce((prev, curr) => prev + (curr.price * curr.qty), 0);
    setTotalPrice(calcTotalPrice)
  }, [])

  return (
    <>
      <Header />
      <div className="container py-4">
        <h1 className="text-center">My cart</h1>
        <div className="table-responsive">
          <table className="table table-sm table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {state.cart && state.cart.map((item, key) => (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{getPrice(item.price)}</td>
                  <td>{getPrice(item.price * item.qty)}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>Total</td>
                <td>{ getPrice(totalPrice) }</td>
              </tr>
            </tfoot>
          </table>

          {state.cart && (
            <div className="w-100 d-flex justify-content-end">
              <div className="btn-group">
                <button className="btn btn-sm btn-primary" onClick={() => navigator('/')}>
                  &#8592; Go back
                </button>
                <button className="btn btn-sm btn-success" onClick={() => finishOrder()}>
                  Order now!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )

}

export default Cart;