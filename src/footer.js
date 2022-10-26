function Footer() {
  return (
    <div className="container-fluid footer text-center">
      <div className="row grid">
        <div className="col-12 col-sm-6 col-md-4 mb-2">
          Mini Project
          <br />
          for dibimbing.id on React JS class.
        </div>
        <br />
        <div className="col-12 col-sm-6 col-md-4 mb-2">
          <a href="#" className="tD_none">About Us</a>
          <br />
          <a href="#" className="tD_none">Contact Us</a>
          <br />
          <a href="#" className="tD_none">Disclaimer</a>
        </div>
        <br />
        <div className="col-12 col-sm-6 col-md-4 feedback_marginTop">
          feedback
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Ketikan Feedbackmu" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onclick="feedBack();">
              Kirim
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col copyright_marginTop">
          Copyright &copy; 2022 mrizqputra
        </div>
      </div>
    </div>
  );
}

export default Footer;