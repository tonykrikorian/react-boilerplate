import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import mainContainer from '../containers/MainContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => { < mainContainer /> }} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
