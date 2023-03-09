//Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Slices
import { getProducts } from './store/slices/products.slice';

//Components
import ProductCard from './components/ProductCard';
import Header from './components/shared/Header';
import ModalUserForm from './components/modals/ModalUserForm';
import ModalDelete from './components/modals/ModalDelete';

function App() {
  const dispatch = useDispatch();
  const modalUserForm = useSelector((state) => state.modalUserForm);
  const modalDelete = useSelector((state) => state.modalDelete);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);

  return (
    <div className="App bg-color-light-5">
      <section className="main container-fluid">
        <Header />
        <div className="row flex-grow-1">
          <div className="col">
            <div className="container">
              <div className="row">
                {products?.map((product) => (
                  <div className="col-md-4 col-lg-3" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer>Footer</footer>
      </section>
      {modalUserForm.isOpen && <ModalUserForm />}
      {modalDelete.isOpen && <ModalDelete />}
    </div>
  );
}

export default App;
