import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import { Container, Row} from 'react-bootstrap';
import './App.css';
import { Routes } from 'react-router-dom';
import AuthPage from './Pages/Auth.page';
import RobotsPage from './Pages/Robots.page';
import { FormattedMessage } from 'react-intl';
import messagesEn from './locales/en.json';
import messagesEs from './locales/es.json';


const idiomaNavegador = navigator.language || navigator.userLanguage || 'es';

function App() {
  return (
    <BrowserRouter>
      <IntlProvider defaultLocale="es"
        locale='es'
        messages={idiomaNavegador.includes('en') ? messagesEn : messagesEs}>
        <Container className='d-flex flex-column min-vh-100'>
          <Row className="justify-content-md-center mt-4">
            <h1 className='text-center fw-bold title-shadow'><FormattedMessage id="main-title" /></h1>
            <hr className='mb-2'/>
            <img src="/banner.png" alt="banner" />
            <hr className='mt-3'/>
          </Row> 
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/lista" element={<RobotsPage />} />
          </Routes>
          <footer className="mt-auto d-flex flex-grow justify-content-center">
            <p className="text-center"><FormattedMessage id="main-contact" />+57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
          </footer>

        </Container>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
