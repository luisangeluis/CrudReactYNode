//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//Components
import ProductCard from './components/ProductCard';
import Header from './components/shared/Header';
import ModalUserForm from './components/modals/ModalUserForm';

const baseUrl = 'https://ecommerce-node-78dk.onrender.com/api/v1';

function App() {
  const modalUserForm = useSelector((state) => state.modalUserForm);
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  const getProducts = () => {
    // console.log('haciendo peticion');
    axios
      .get(`${baseUrl}/products`)
      .then((res) => setProducts(res.data.response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App bg-color-light-5">
      <section className="main container-fluid">
        <Header />
        <div className="row flex-grow-1">
          <div className="col">
            <div className="row">
              {products?.map((product) => (
                <div className="col-lg-3" key={product.description}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer>Footer</footer>
      </section>

      {modalUserForm.isOpen && <ModalUserForm />}
    </div>
  );
}

export default App;
