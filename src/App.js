import React from 'react';
import './App.css'
import Users from './Users';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {

  render() {

    const Home = () => {
      return (
        <div>Home</div>
      )
    }

    const About = () => {
      return (
        <div>About</div>
      )
    }

    const Contact = () => {
      return (
        <div>Contact</div>
      )
    }

    const Menu =() => {
      return (
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      )
    }

    return (
      <Router>
        <div>
          <h1>REACT Router</h1>
          <Menu />
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
