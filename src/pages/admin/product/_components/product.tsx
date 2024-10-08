const FromProduct = () => {
    return (
      <>
        <form action="">
          <div className="row row-cols-2 gy-4">
            <div className="col">
              <label htmlFor="product" className="form-label">
                Username *
              </label>
              <input
                type="text"
                id="product"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col">
              <label htmlFor="product" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="username"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col">
              <label htmlFor="fullname" className="form-label">
                FullName
              </label>
              <input
                type="text"
                id="product   "
                className="form-control form-control-lg"
              />
            </div>
            <div className="col">
              <label htmlFor="Quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                id="product"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col">
              <button className="btn btn-primary "> ADD</button>
            </div>
          </div>
        </form>
      </>
    );
  };
  export default FromProduct;