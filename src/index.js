import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

import { Providers } from 'providers';
import { Loading } from "common";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Providers>
        <Router>
          <App />
        </Router>
      </Providers>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
