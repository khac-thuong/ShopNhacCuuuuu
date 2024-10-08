import { useContext } from "react";
import { MainContext } from "../../context/mainprovider";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <div className="hot-banner">
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval={2000}
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="img/anhlayout1.png"
                    className="d-block w-100"
                    alt="A"
                  />
                  <div className="carousel-caption">
                    <p className="fw-semibold">Giảm 15%</p>
                    <h1 className="fw-bold">Yamaha U1H</h1>
                    <a href="" className="buy-btn mt-3">
                      Mua Ngay
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="img/anhlayout2.png"
                    className="d-block w-100"
                    alt="B"
                  />
                  <div className="carousel-caption">
                    <p className="fw-semibold">Sale hot lên đến 40%</p>
                    <h1 className="fw-bold">Kawai K300</h1>
                    <a href="" className="buy-btn mt-3">
                      Mua Ngay
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="img/anhlayout3.png"
                    className="d-block w-100"
                    alt="C"
                  />
                  <div className="carousel-caption">
                    <p className="fw-semibold">Ưu đãi lớn</p>
                    <h1 className="fw-bold">Steinway &amp; Sons</h1>
                    <a href="" className="buy-btn mt-3">
                      Mua Ngay
                    </a>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container">
            <h2 className="mt-4 mb-4 text-center">Sản phẩm nổi bật</h2>
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 gy-4 mb-5">
              {data?.products.slice(0, 6).map((items, index) => {
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
        </div>
      </div>
    </>
  );
};
export default HomePage;
