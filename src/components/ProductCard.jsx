//Dependencies
import axios from 'axios';
import { useDispatch } from 'react-redux';
//Slices
import { getProducts } from '../store/slices/products.slice';
import { setModal } from '../store/slices/modalUserForm.slice';

const baseUrl = 'https://ecommerce-node-78dk.onrender.com/api/v1';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handlerClickDelete = () => {
    axios
      .delete(`${baseUrl}/products/${product.id}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(() => dispatch(getProducts()));
  };

  const handlerClickEdit = () => {
    dispatch(setModal({ isOpen: true, data: product }));
  };

  return (
    <article className="card mb-3">
      <div className="row g-0">
        {/* <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div> */}
        <div className="col-md-12">
          <div className="card-header d-flex justify-content-between align-items-center bg-color-light-4">
            <h5 className="card-title text-primary-emphasis">{product.name}</h5>
            <button
              className="btn text-white bg-danger fw-bold"
              onClick={handlerClickDelete}
            >
              <i className="fa-solid  fa-trash"></i>
            </button>
          </div>
          <div className="card-body">
            <p className="card-text text-success">{product.description}</p>
            <p className="card-text d-flex justify-content-end align-items-center">
              <small className="text-muted">${product.price}</small>
            </p>

            <button
              className="btn bg-light text-primary-emphasis border border-primary-subtle"
              onClick={handlerClickEdit}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
