import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Grid from './componentes/Grid';
import Slider from './componentes/slider';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')

ReactDOM.render(
<div className="full-width">
<Slider />
<div className="container">
    <App />
    <Grid />

</div></div>, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
