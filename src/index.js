import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import FileUploader from './components/classifier';
import {  Route, Switch, BrowserRouter,Router,Routes } from 'react-router-dom';
import About from './components/Views/About';
import Contact from './components/Views/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  

    <BrowserRouter>
    
    <Routes>
      
        {/* Define your routes using the Route component */}
        
          {/* Each Route component represents a different route */}
          <Route  path="/" element={<FileUploader />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


        
          {/* If none of the above routes match, render NotFound component */}
          <Route  />
        
      
    </Routes>
    </BrowserRouter>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
