import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ErrorBoundary from './common/error-bounderies';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}> 
  {/* RestrictMode render component twice in intial mount to make it resilient or if any issue
  due to some side effect or external subscription or api calls or any unhandled error handling */}
  <React.StrictMode>
    <ErrorBoundary>
    <Router>
     <App/>
    </Router>
    </ErrorBoundary>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
