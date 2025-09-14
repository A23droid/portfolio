import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

(function() {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-BV40F146PV`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BV40F146PV');
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
