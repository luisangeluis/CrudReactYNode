//Dependencies
import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
//Custom hooks
import useGetCategories from '../../hooks/useGetCategories';
//Slices
import { setModal } from '../../store/slices/modalUserForm.slice';
import {
  handlerSubmitCreate,
  handlerSubmitUpdate,
} from '../../store/slices/products.slice';

const ModalUserForm = () => {
  const dispatch = useDispatch();
  const [categories] = useGetCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: { category: '' } });
  // const selectElement = useRef(null);
  const productToEdit = useSelector((state) => state.modalUserForm);
  console.log(productToEdit);
  // const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    productToEdit.data.categoryId
      ? setValue('category', `${productToEdit.data.categoryId}`)
      : setValue('category', '');
  }, []);

  const Select = forwardRef(({ onChange, name, categories }, ref) => {
    return (
      <>
        <select
          name={name}
          ref={ref}
          onChange={onChange}
          className="form-select"
        >
          {categories?.map((categorie) => {
            return (
              <option value={categorie.id} key={categorie.id}>
                {categorie.name}
              </option>
            );
          })}
        </select>
      </>
    );
  });

  console.log(Select);

  console.log(productToEdit);

  const handlerClickClose = () => {
    dispatch(setModal({ isOpen: false, data: {} }));
  };

  const onSubmit = (data) => {
    console.log(data);
    productToEdit.data.id
      ? dispatch(handlerSubmitUpdate(productToEdit.data.id, data))
      : dispatch(handlerSubmitCreate(data));
    handlerClickClose();
  };

  return (
    <section className="modal-user-form position-fixed w-100 h-100 d-flex justify-content-center align-items-center modal">
      <div className="modal-dialog modal-lg modal-fullscreen-md-down p-2 p-md-3 rounded-2">
        <div className="modal-content bg-light">
          <div className="modal-header">
            <h5 className="modal-title">
              {productToEdit.data.id
                ? 'Edit a product'
                : 'Create a new product'}
            </h5>
            <button onClick={handlerClickClose} className="btn-close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  {...register('name', { required: 'This field is required' })}
                  defaultValue={productToEdit.data.name}
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
                  defaultValue={productToEdit.data.description}
                />
                {errors.description && (
                  <p role="alert">{errors.description?.message}</p>
                )}
              </div>
              <div className="form-floating">
                <Select
                  label="categories"
                  categories={categories}
                  {...register('category')}
                />
                {/* <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  // ref={selectElement}
                  {...register('category', {
                    required: 'This field is required',
                  })}
                  // value={selectedValue}
                  // onChange={handlerOnChange}
                >
                  {/* {setSelectCategories(categories)} }
                </select> */}
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
                  defaultValue={productToEdit.data.price}
                />
                {errors.price && <p role="alert">{errors.price?.message}</p>}
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={true}
                  id="flexCheckDefault"
                  {...register('available')}
                  // defaultChecked={
                  //   productToEdit.data.status === 'active' ? true : false
                  // }
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Is the product available?
                </label>
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value={
                  productToEdit.data.id ? 'Edit a product' : 'Create a product'
                }
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalUserForm;
