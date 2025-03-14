import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import { Container, Row} from 'react-bootstrap';
import './App.css';
import { Routes } from 'react-router-dom';
import AuthPage from './Pages/Auth.page';
import RobotsPage from './Pages/Robots.page';

function App() {
  return (
    <BrowserRouter>
      <IntlProvider defaultLocale="es">
        <Container>
          <Row className="justify-content-md-center">
            <h1 className='text-center'>Adopta un Robot con Robot Lovers!</h1>
            <img src="/banner.png" alt="banner" />
          </Row> 
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/lista" element={<RobotsPage />} />
          </Routes>
          <footer className="d-flex flex-grow-1 justify-content-center">
            <p className="text-center text-muted mt-5 mb-5">Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
          </footer>

        </Container>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
