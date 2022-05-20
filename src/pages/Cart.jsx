import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Header from '../components/Header';
import { Context } from "../context/AppContext";

const Cart = () => {

  const navigator = useNavigate();
  const [state, dispatch] = useContext(Context);

  const finishOrder = () => {
    toast.success('Ordered with successful.');
    dispatch({ type: 'ORDER' });
    return;
  }

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
                  <td>{item.price}</td>
                  <td>{item.qty * parseFloat(item.price)}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
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