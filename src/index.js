import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

// React.StrictMode => Javascript use strict 처럼 문제가 발생 시 콘솔에서 명확히 표기하기 위한 것과 동일한 부분
//                     배포할 시에는 자동적으로 제외됨(따라서 그냥 씀)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);