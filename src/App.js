import React from 'react';
import Users from './Users';
import { BrowserRooter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <h1>REACT Router</h1>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
