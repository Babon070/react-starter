import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
const root = ReactDOM.createRoot(document.getElementById('root'));


export const Context = createContext(null) 

// console.log(process.env.REACT_APP_API_URL);

root.render(
  <BrowserRouter>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}>
      <App />
    </Context.Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
