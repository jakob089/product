import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  showContents = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} component={route.main} exact={route.exact} />
      })
    }
    return result;
  }
  render() {
    return (
      <Router>
        <Menu />
        <div className="container">

          {this.showContents(routes)}

        </div>

      </Router>
    );
  }
}

export default App;