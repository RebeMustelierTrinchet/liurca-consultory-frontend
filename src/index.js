import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import Faqs from './pages/faq/faq';
import Services from './pages/services/services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/faqs" element={<Faqs/>} />
          <Route exact path="/services" element={<Services/>} />
          {/* <Route exact path="/gallery" element={<Gallery/>} />
          <Route exact path="/contact" element={<Contact_Us/>} />
          <Route exact path="/service/:id" element={<Service_details />} /> */}
        </Routes>
      </Layout>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
