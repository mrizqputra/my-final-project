import imgfood from './food.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="blob"></div>
      <navbar className="Navigation">
        <div className="TitleApp">Goody Foody</div>
      </navbar>
      <div className="Openings">Need Food Libraries?</div>
      <div className="OpeningWords">in this app, you can manage your favorite food and enjoy it everyday.</div>
      <div className="OpeningsImage">
        {imgfood}
        <img className="img-fluid" alt="gambar" />
      </div>
    </div>
  );
}

export default App;
