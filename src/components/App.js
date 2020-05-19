import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={MainContainer} />
    </BrowserRouter>
  );
}

export default App;
