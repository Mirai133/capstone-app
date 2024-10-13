import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Specials from './components/Specials';
import SubFooter from './components/SubFooter';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Specials/>
      <Testimonials/>
      <SubFooter/>
      <Footer/>
    </div>
  );
}

export default App;
