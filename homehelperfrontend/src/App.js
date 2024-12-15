
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  
  import logo from './logo.svg';
  import './App.css';
  import Navbar from './components/Navbar/Navbar';
  import Footer  from './components/Footer/Footer';
  import HomePage from './pages/Home.js';
  import Payment from './pages/Payment.js';
  
  function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/payment" element={<Payment />} />
            {/* Add other routes here */}
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;
  