import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.scss';
import "./firebase";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);