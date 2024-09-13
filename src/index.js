import React from 'react';
import ReactDOM from 'react-dom/client'; // Actualiza la importación aquí
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import Faqs from './pages/faq/faq';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';
import ServiceDetails from './pages/service-details/service_details';

// Crear el root correctamente
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/service-details/:serviceId" element={<ServiceDetails />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
