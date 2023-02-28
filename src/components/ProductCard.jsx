const ProductCard = ({ product }) => {
  return (
    <article className="card mb-3">
      <div className="row g-0">
        {/* <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div> */}
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title text-primary-emphasis">{product.name}</h5>
            <p className="card-text text-success">{product.description}</p>
            <p className="card-text d-flex justify-content-end align-items-center">
              <small className="text-muted">${product.price}</small>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
