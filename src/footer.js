const feedBack = () => {
  alert("your feedback has been sent")
};

function Footer() {
  return (
    <div className="container">
    <div className="container-fluid footer text-center ">
      <div className="row grid">
        <div className="col-12 col-sm-6 col-md-4 mb-3 mt-3">
          Final Project
          <br />
          for dibimbing.id on React JS class.
        </div>
        <br />
        <div className="col-12 col-sm-6 col-md-4 mb-3 mt-3">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" id="tD_none">About Us</a>
          <br />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" id="tD_none">Contact Us</a>
          <br />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" id="tD_none">Disclaimer</a>
        </div>
        <br />
        <div className="col-12 col-sm-6 col-md-4 feedback_marginTop mb-3 mt-3">
          feedback
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Ketikan Feedbackmu" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onclick={() => feedBack}>
              send
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col copyright_marginTop mb-3">
          Copyright &copy; 2022 mrizqputra
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;