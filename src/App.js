import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';


// import Category from './Components/Catergory&Slider/Category';
import Slider from './Components/Catergory&Slider/Slider';
import Card from './Components/Cards/Card';
import SlickProducts from './Components/Cards/SlickProducts';
import Cardscategory from './Components/Cards/Cardscategory';
import Payment from './Components/PaymentIcons/Payment';
import Footer from './Components/footer/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Card/>
      <SlickProducts/>
      <Cardscategory/>
      <Payment/>
      <Footer/>
    </div>
  );
}

export default App;
