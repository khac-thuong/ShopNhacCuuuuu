import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
const Authen = () => {
  const navigate = useNavigate();
  const auth = getAuth(); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [registerUsername, setRegisterUsername] = useState(""); 
  const [registerEmail, setRegisterEmail] = useState(""); 
  const [registerPassword, setRegisterPassword] = useState(""); 
  const [error, setError] = useState(""); 

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, username, password); 
      navigate("/admin/dashboard"); 
      setError(""); 
    } catch (error) {
      setError("Tên đăng nhập hoặc mật khẩu không đúng!"); 
      console.error("Error signing in: ", error);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <ul className="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active py-3 shadow-lg"
              style={{ width: 200 }}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Đăng Nhập
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              style={{ width: 200 }}
              className="nav-link py-3 shadow-lg"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Đăng ký
            </button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <h2 className="text-center mb-4">ĐĂNG NHẬP</h2>
            {error && <div className="alert alert-danger">{error}</div>} {}
            <form id="loginForm" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                   Email*
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                  required
                />
              </div>  
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Đăng nhập
              </button>
              <a href="#" className="d-block text-center mt-2">
                Quên mật khẩu?
              </a>
            </form>
          </div>

          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <h2 className="text-center mb-4">ĐĂNG KÝ</h2>
            <form id="registerForm" onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="registerUsername" className="form-label">
                  Tên đăng nhập *
                </label>
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control"
                  placeholder="Nhập tên đăng nhập"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control"
                  placeholder="Nhập email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        <div className="separator text-center mt-4">
          <span>HOẶC</span>
        </div>
        <div className="social-login d-flex justify-content-center mt-3">
          <a href="#" className="btn btn-outline-primary me-2">
            <i className="fab fa-facebook-f" /> Facebook
          </a>
          <a href="#" className="btn btn-outline-danger">
            <i className="fab fa-google" /> Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Authen;
