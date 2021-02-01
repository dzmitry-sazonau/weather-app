import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';

export default (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/">
        <WeatherPage />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
)
