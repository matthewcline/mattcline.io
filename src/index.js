import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const travelDiv = document.querySelector("#travel-photos");
console.log("travelDiv: ", travelDiv);
ReactDOM.render(
  <App />, 
  document.querySelector("#travel_photos_container")
);