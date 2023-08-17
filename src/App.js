import './App.css';
import SecondPage from './component/AffiliateMarketing';
import FirstPage from './component/staticPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' Component={FirstPage}/>
          <Route path='/Sogbesan-Tantolorun/AffiiateMarketing' Component={SecondPage}/>
        </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
