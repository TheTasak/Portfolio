import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  })
});

const observe = () => {
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach(el => observer.observe(el));
}

window.addEventListener("scroll", observe);