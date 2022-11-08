// import imgfood from './img/food.jpg';
import './App.css';
import imgApple from './img/apple.png';
import imgBanana from './img/banana.png';
import Rectangle1 from './img/Rectangle 1.png';
import Rectangle2 from './img/Rectangle 2.png';
import Rectangle3 from './img/Rectangle 3.png';



function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-12 col-sm-6'>
        <div className='homeText'>Premium <span className='orange'>Quality</span></div>
        <div className='homeText'>Food for Your
        <span className='imgWrap'>
          <img src={imgBanana} />
          </span>
        <span className='orange'> Healthy</span></div>
        <div className='homeText'><span className='imgWrap2'><img src={imgApple} /></span><span className='orange'>& Daily Life</span></div>
      <div className='loRem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      <button className='homeButton'>Login</button>
      </div>
      <div className='col-12 col-sm-6'>
        <img className='rectangle1' src={Rectangle1}></img>
        <img className='rectangle2' src={Rectangle2}></img>
        <img className='rectangle3' src={Rectangle3}></img>
      </div>
      </div>
    </div>
  );
}

export default App;
