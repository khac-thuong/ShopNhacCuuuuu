const About = () => {
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-center mt-5 mb-5">Nhóm 12</h1>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
          <div className="member card shadow-lg">
            <img src="img/phong.jpg" alt="Phong" className="img-fluid" />
            <h3 className="text-center">Thanh Phong</h3>
            <p className="text-center">MSSV: 23-0-00393</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
          <div className="member card shadow-lg">
            <img src="img/thien.png" alt="Thiện" className="img-fluid" />
            <h3 className="text-center">Hữu Thiện</h3>
            <p className="text-center">MSSV: 23-0-00014</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
          <div className="member card shadow-lg">
            <img src="img/thuong.jpg" alt="Thương" className="img-fluid" />
            <h3 className="text-center">Khắc Thương</h3>
            <p className="text-center">MSSV: 23-0-00149</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
