import React from 'react';
import Login from './Login';
import desk from './desk';
import grid from './grid';
import cards from './Cards';

import {HashRouter,Route} from 'react-router-dom';

// i changed browserrouter from router-dom to hashhistory from router-dom to fix server side loading(at browserdom when i clicked on URL i saw error 404)

const routing = (
    <HashRouter>
          <Route  exact path="/"  component={desk} />
          <Route  path="/grid"   component={grid} />
          <Route  path="/cards"   component={cards} />
          <Route  path="/login"   component={Login} />
    </HashRouter>
)

function Collected() {
  return (
    routing
  );
}

export default Collected;
