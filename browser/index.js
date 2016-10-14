'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'; 
import { loadPuppies } from './AllPuppiesContainer';




ReactDOM.render(
  <Provider store={store}>
    <Router history = {hashHistory}>
      <Route path="/">
        <Route path="puppies" component={AllPuppiesContainer} onEnter={ () => store.dispatch(loadPuppies())}/>
        <IndexRoute component={AllPuppiesContainer} onEnter={ () => store.dispatch(loadPuppies())}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);


//     <div className="container flexbox-container">
//       <div className="jumbotron">
//         <AllPuppies />
//       </div>
//     </div>
 
  