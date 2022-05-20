import Item from './../components/Item';
import Banner from '../components/Banner';

import ProductList from './../../public/foods.json';

const Index = () => {

  return (
    <>
      <Banner />
      <div className="container py-2">
        <h1 className='text-center py-4'>Order our delicious food</h1>
        <div className="row products-row">
          {ProductList && ProductList.map((data, key) => (
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