import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FFD700" }}> 
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="img/logo.png"
              alt="Logo"
              className="img-fluid rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold" href="introduce">Giới Thiệu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="product">Sản Phẩm</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="about">About</a>
              </li>
            </ul>

            <form className="d-flex mx-auto flex-grow-1" style={{ maxWidth: "400px" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn..."
                  aria-label="Tìm kiếm sản phẩm"
                />
                <button className="btn btn-outline-secondary" type="button">
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>

            <div className="d-flex align-items-center justify-content-center ms-2 my-3">
              <button
                className="btn btn-custom me-2"
                onClick={() => navigate("shop")}
                title="Giỏ Hàng"
              >
                <i className="fas fa-shopping-cart" />
              </button>
              <button
                className="btn btn-custom"
                onClick={() => navigate("/authen")}
                title="Đăng Nhập"
              >
                Đăng Nhập
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;