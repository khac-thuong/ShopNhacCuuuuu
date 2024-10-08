import { useContext } from "react";
import { MainContext } from "../../context/mainprovider";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { data } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 gy-4">
          {data?.products.map((items, index) => {
            return (
              <>
                <div
                  className="col"
                  key={index}
                  role="button"
                  onClick={() => navigate(`/product/${items.id}`)}
                >
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={items.img}
                      alt={items.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{items.name}</h4>
                      <p className="card-text">{items.price} VND</p>
                      <button className="buy-btn" type="button">
                        Mua
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductPage;
