//Dependencies
import { useDispatch } from 'react-redux';
//Slices
import { setModal } from '../../store/slices/modalUserForm.slice';

const Header = () => {
  const dispatch = useDispatch();

  const handlerClickModalUserForm = () => {
    dispatch(setModal({ isOpen: true, data: {} }));
  };
  return (
    <nav className="navbar navbar-expand-lg bg-color-2 border border-secondary border-0 rounded mb-4 mx-0 py-3 px-1 px-lg-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className="btn btn-secondary"
                onClick={handlerClickModalUserForm}
              >
                Add product <i className="fa-solid fa-plus"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
