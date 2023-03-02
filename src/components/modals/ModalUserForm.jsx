//Dependencies
import { useDispatch } from 'react-redux';
//Custom hooks
import useGetCategories from '../../hooks/useGetCategories';
//Slices
import { setModal } from '../../store/slices/modalUserForm.slice';

const ModalUserForm = () => {
  const dispatch = useDispatch();
  const [categories] = useGetCategories();

  console.log(categories);
  const handlerClickClose = () => {
    dispatch(setModal({ isOpen: false, data: {} }));
  };

  const handlerOnChange = (e) => {
    // console.log(e.target.value);
    // e.target.value = 3;
  };

  const setSelectCategories = (categories, categorieId) => {
    let elements = categories?.map((category, i) => {
      return (
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      );
    });

    // console.log(elements);

    // elements?.push(<option>Select</option>);

    // if (!categorieId) {
    //   let select = -1;
    //   elements?.forEach((element, i) => {
    //     if (element.props.children === 'Select') select = i;
    //   });

    //   console.log(select);
    // }

    // else
    // elements.push(<option defaultValue>Select</option>);

    return elements;
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
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input type="text" className="form-control" id="description" />
              </div>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  onChange={handlerOnChange}
                >
                  {setSelectCategories(categories)}
                </select>
                <label htmlFor="floatingSelect">Categories.</label>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input type="text" className="form-control" id="price" />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="true"
                  defaultChecked={true}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Is available?
                </label>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalUserForm;
