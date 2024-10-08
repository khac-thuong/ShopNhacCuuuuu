const Footer =()=>{
    return(
        <>
        <footer className="footer">
    <div className="container">
      <div className="row">
      
        <div className="col-md-3">
          <h5>Cập nhật thông tin</h5>
          <form className="subscribe-form">
            <input type="email" placeholder="Email của bạn" aria-label="Email của bạn" /> 
            <button type="submit" className="buy-btn">Đăng ký</button>
          </form>
          <h5 className="mt-3">Kết nối với chúng tôi</h5>
          <div className="social-icons">
          <i className="fa-brands fa-facebook me-3"></i>
          <i className="fa-brands fa-instagram me-3"></i>
          <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
        <div className="col-md-3">
          <h5>Hỗ trợ khách hàng</h5>
          <ul>
            <li><i className="fas fa-phone" /> 0862029309</li>
            <li><i className="fas fa-envelope" /> <a href="https://elearning.caodangsaigon.edu.vn/">Elearning</a></li>
            <li><i className="fas fa-clock" /> Thời gian phục vụ: 8h-22h</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Địa chỉ</h5>
          <p>
            Công viên Phần mềm Quang Trung, Tòa nhà SaigonTech, Lô 14 Đường Số 5, Tân Chánh Hiệp, Quận 12, Hồ Chí Minh 700000, Việt Nam
          </p>
        </div>
        <div className="col-md-3">
          <h5>GoogleMap</h5>
          <a href="https://maps.app.goo.gl/1Vq6WgomCVRz5ewN7" target="_blank">Xem bản đồ trên Google Maps</a> {/* Liên kết đến Google Maps */}
        </div>
      </div>
    </div>
    </footer>
        </>
    )
}
export default Footer