import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer  from './components/Footer/Footer';
import Context from './components/Context/Context';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Context/>
      <Footer/>
    </div>
  );
}

export default App;
