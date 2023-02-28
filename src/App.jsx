//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';
//Components
import ProductCard from './components/ProductCard';
import Header from './components/shared/Header';

const baseUrl = 'https://ecommerce-node-78dk.onrender.com/api/v1';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  const getProducts = () => {
    axios
      .get(`${baseUrl}/products`)
      .then((res) => setProducts(res.data.response))
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <section className="main container-fluid">
        <Header />
        <div className="row">
          {products?.map((product) => (
            <div className="col-lg-3" key={product.description}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
