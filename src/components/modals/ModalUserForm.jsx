//Dependencies
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';

//Custom hooks
import useGetCategories from '../../hooks/useGetCategories';

//Slices
import { setModal } from '../../store/slices/modalUserForm.slice';
import { getProducts } from '../../store/slices/products.slice';

const baseUrl = 'https://ecommerce-node-78dk.onrender.com/api/v1';

const ModalUserForm = () => {
  const dispatch = useDispatch();
  const [categories] = useGetCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const selectElement = useRef(null);

  const handlerClickClose = () => {
    dispatch(setModal({ isOpen: false, data: {} }));
  };

  const setSelectCategories = (categories, categorieId) => {
    let elements = [];
    elements.push(
      <option value="" key="default" defaultValue>
        Select a category
      </option>
    );
    categories?.forEach((category) => {
      elements.push(
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      );
    });

    return elements;
  };

  const handlerSubmitCreate = (data) => {
    const { name, description, category, price, available } = data;
    const newProduct = {
      name,
      description,
      categoryId: category,
      price,
      available,
    };

    axios
      .post(`${baseUrl}/products`, newProduct)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        dispatch(getProducts());
        handlerClickClose();
      });
  };

  return (
    <section className="modal-user-form position-fixed w-100 h-100 d-flex justify-content-center align-items-center modal">
      <div className="modal-dialog modal-lg modal-fullscreen-md-down p-2 p-md-3 rounded-2">
        <div className="modal-content bg-color-light-4">
          <div className="modal-header">
            <h5 className="modal-title">Create a new product</h5>
            <button onClick={handlerClickClose} className="btn-close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(handlerSubmitCreate)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  {...register('name', { required: 'This field is required' })}
                />
                {errors.name && <p role="alert">{errors.name?.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  className="form-control"
                  id="description"
                  {...register('description', {
                    required: 'This field is required',
                  })}
                />
                {errors.description && (
                  <p role="alert">{errors.description?.message}</p>
                )}
              </div>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  ref={selectElement}
                  {...register('category', {
                    required: 'This field is required',
                  })}
                >
                  {setSelectCategories(categories)}
                </select>
                <label htmlFor="floatingSelect">Categories.</label>
                {errors.category && (
                  <p role="alert">{errors.category?.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  {...register('price', { required: 'This field is required' })}
                />
                {errors.price && <p role="alert">{errors.price?.message}</p>}
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  defaultChecked={true}
                  id="flexCheckDefault"
                  {...register('available')}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Is the product available?
                </label>
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Create a product"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalUserForm;
