//Dependencies
import { useDispatch } from 'react-redux';
//Slices
import { setModal } from '../../store/slices/modalUserForm.slice';

const ModalUserForm = () => {
  const dispatch = useDispatch();
  const handlerClickClose = () => {
    dispatch(setModal({ isOpen: false, data: {} }));
  };
  return (
    <section className="modal-user-form position-fixed w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="row p-2 p-md-3 rounded-2 bg-color-light-4">
        <div className="col">
          <button onClick={handlerClickClose}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ModalUserForm;
