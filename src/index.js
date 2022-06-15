import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

// import MarvelService from './services/MarvelService'



// marvelService.getAllCharacters().then(res => console.log(res))
// marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)))
// 1011052
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

