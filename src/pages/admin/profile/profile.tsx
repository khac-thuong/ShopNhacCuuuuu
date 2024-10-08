import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const navigate = useNavigate();
  
  const [adminData,] = useState({
    name: "Nguyễn Văn A",
    email: "admin@domain.com",
    position: "admin",
    avatar: "https://via.placeholder.com/150",
  });


  const handleLogout = () => {

    navigate("/authen");
  };

  return (
    <>
    <h1>Hello, Admin !</h1>
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card shadow-lg">
            <div className="card-body text-center">
              <img
                src={adminData.avatar}
                alt="Admin Avatar"
                className="rounded-circle img-fluid mb-3"
                width="150"
                height="150"
              />
              <h4 className="card-title">{adminData.name}</h4>
              <p className="card-text">{adminData.position}</p>
              <p className="card-text text-muted">{adminData.email}</p>
            </div>
          </div>
        </div>

       
        <div className="col-lg-8">
          <div className="card shadow-lg mb-4">
            <div className="card-header">
              <h5>Chỉnh sửa thông tin cá nhân</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Họ và Tên</label>
                  <input type="text" className="form-control" id="name" value={adminData.name} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={adminData.email} />
                </div>
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">Chức vụ</label>
                  <input type="text" className="form-control" id="position" value={adminData.position} />
                </div>
                <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
              </form>
            </div>
          </div>

          
          <div className="card shadow-lg">
            <div className="card-header">
              <h5>Thay đổi mật khẩu</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="oldPassword" className="form-label">Mật khẩu cũ</label>
                  <input type="password" className="form-control" id="oldPassword" />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">Mật khẩu mới</label>
                  <input type="password" className="form-control" id="newPassword" />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu mới</label>
                  <input type="password" className="form-control" id="confirmPassword" />
                </div>
                <button type="submit" className="btn btn-primary">Cập nhật mật khẩu</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-center mt-4">
        <button className="btn btn-danger" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
    </div>
    </>
  );
};

export default AdminProfile;
