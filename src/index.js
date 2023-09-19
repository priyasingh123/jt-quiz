import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
Doubts:
1. padStart
2. why did we clear timer
3. Array.from wala 
4. box-sizing: border-box meaning
5. options wala sabse bada issue
6. new abort controller

todos

4. try to fix that first question yellow button issue
6. make responsive 
8. first question renders then next question comes immediately
9. handle error when API does not work
10. scroll is coming for horizontal scroll

*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
