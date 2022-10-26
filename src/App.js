import imgfood from './food.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="blob"></div>
      {/* <!-- Button trigger modal --> */}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <navbar className="Navigation">
        <div className="TitleApp">Goody Foody</div>
      </navbar>
      <div className="Openings">Need Food Libraries?</div>
      <div className="OpeningWords">in this app, you can manage your favorite food and enjoy it everyday.</div>
      {/* <div className="OpeningsImage">
        <img className="img-fluid" src={imgfood} alt="gambar" />
      </div> */}
    </div>
  );
}

export default App;
