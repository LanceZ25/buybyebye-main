// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Make sure this import is correct
import './styles.css'; // Import the styles.css file

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
const PORT = process.env.PORT || 3000;
// Optional: Log performance metrics to the console
reportWebVitals(console.log);

