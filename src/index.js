import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './server';

ReactDOM.render(
  <React.StrictMode>
     <LocalizationProvider dateAdapter={AdapterMoment}>
     <App />
    </LocalizationProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
