import './App.css';
import Employee from './components/Employee';
import Viewemployees from './components/Viewemployees';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route } from 'react-router-dom';
import Header from "./components/Header"


function App() {
  return (
    <div className="App">
         <Header />

        <Employee />
      
    </div>
  );
}

export default App;
