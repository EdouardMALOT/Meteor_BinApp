import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinMain from  './components/bins/bins_main';
import BinList from  './components/bins/bins_list';
import { Bins } from '../imports/collections/bin';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinList}/>
      <Route path="bin/:bin_id" component={BinMain} />
    </Route>
  </Router>
)


Meteor.startup(() => {
  ReactDom.render(routes, document.querySelector('.render-target'));
});