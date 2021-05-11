import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <div className="wrap_hw">
      <h2 className="hw_tytle">HW17 "Інтро до React"</h2>
      <Post />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
