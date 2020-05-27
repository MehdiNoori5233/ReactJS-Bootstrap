import React from 'react';
import Login from './Login';
import desk from './desk';
import grid from './grid';
import cards from './Cards';


// import { HashRouter } from 'react-router-dom'

// <HashRouter>
//   <App/>
// </HashRouter>



import { Route, Switch, BrowserRouter } from 'react-router-dom';
const routing = (
  <BrowserRouter>
     <Switch>
        <div>
          <Route  exact path="/"  component={desk} />
          <Route  path="/Login"   component={Login} />
          <Route  path="/grid"   component={grid} />
          <Route  path="/cards"   component={cards} />
        </div>
    </Switch>
  </BrowserRouter>
)

function Collected() {
  return (
    routing
  );
}

export default Collected;