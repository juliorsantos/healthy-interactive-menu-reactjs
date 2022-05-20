import { useParams } from "react-router-dom";

const Product = () => {

  const param = useParams();

  useEffect(() => {
    console.log(param);
  }, []);

  return (
    <h1>Hello!</h1>
  )

}

export default Product;