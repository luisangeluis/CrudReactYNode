//Dependencies
import { useDispatch, useSelector } from 'react-redux';
//Slices
import { setModalDelete } from '../../store/slices/modalDelete.slice';
import { handlerSubmitDelete } from '../../store/slices/products.slice';

const ModalDelete = () => {
  const dispatch = useDispatch();
  const productToDelete = useSelector((state) => state.modalDelete);

  const handlerClickModalDelete = () => {
    dispatch(handlerSubmitDelete(productToDelete?.data.product.id));
    handlerClickClose();
  };

  const handlerClickClose = () => {
    dispatch(setModalDelete({ isOpen: false, data: {} }));
  };

  return (
    <div className="modal modal-user-form position-fixed w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="modal-dialog modal-md   p-2 p-md-3 rounded-2">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center custom-color-red">
              {productToDelete.data.message}
            </h5>
            <button
              type="button"
              className="btn-close border border-2 border-primary-subtle"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handlerClickClose}
            ></button>
          </div>
          <div className="modal-body text-center">
            <button
              className="btn btn bg-color-1 border border-secondary fw-bold mx-2"
              onClick={handlerClickClose}
            >
              No
            </button>
            <button
              className="btn custom-bg-color-red fw-bold"
              onClick={handlerClickModalDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
