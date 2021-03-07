import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

/********** AXIOS LIBRARY CONFIGURATION **************/

axios.defaults.headers.common['Authorization'] = 'TOKEN';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Software middleware placed between the application and the server ( as a Java Filter)
// So many interceptors as desired can be placed
axios.interceptors.request.use(request => {
  console.log('[INTERCEPTOR REQUEST]', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('[INTERCEPTOR RESPONSE]', response);
  return response;
});

/********** AXIOS LIBRARY CONFIGURATION **************/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();