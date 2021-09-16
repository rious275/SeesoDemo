import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// 페이지 구분
import Start from './pages/Start';
import Setting from './pages/Setting.js';
import Demo from './pages/Demo';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/demo" component={Demo} />
      </Switch>
    </Router>
  );
};

export default Routes;
