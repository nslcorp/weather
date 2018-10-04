import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './components/routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

//const API_KEY = '3585775f387b0d0cba6c5b3dc41b8167'; //http://api.openweathermap.or
//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrwRulIzknvLKB_ZX9baK0Ao4B3245LAA&callback=initMap"
// private url = 'https://api.openweathermap.org/data/2.5/weather';// private key = 'appid=38454edd9d0958ac386d653403072f43';
/*const key = 'apiKey=ca2d5b8c76a84ec68544ecdeadf04043';
let urlBase = 'https://newsapi.org/v2/top-headlines';*/
