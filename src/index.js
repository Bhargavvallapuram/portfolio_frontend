import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Header from './Header';
import Footer from './footer';
import Home from './Home';
import Project from './Project';
import Certificate from './Certificate';
import About from './About';
import ContactMe from './ContactMe';
import Services from './Services';

// Function to load the correct component based on the URL
const getPageComponent = () => {
  const path = window.location.pathname;

  switch (path) {
    case '/':
    case '/index.html':
      return <Home />;
    case '/projects':
      return <Project />;
    case '/certificates':
      return <Certificate />;
    case '/about':
      return <About />;
    case '/services':
      return <Services />;
    case '/contact':
      return <ContactMe />;
    default:
      return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Page Not Found</h2>;
  }
};

const App = () => {
  return (
    <>
      <Header />
      <main>{getPageComponent()}</main>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
