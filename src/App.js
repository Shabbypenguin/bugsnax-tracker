import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BugSnaxer from './components/bugsnacker.js'
import BugsnaxList from './components/BugsnaxList.js'
import Bugsnax from './components/Bugsnax.js'
import Grumpuses from './components/Grumpuses.jsx'




class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BugSnaxer} />
          <Route exact path="/bugsnaxlist" component={BugsnaxList} />
          <Route exact path="/bugsnax/:id" component={Bugsnax} />
          <Route exact path="/grumpuses/:id" component={Grumpuses} />
        </Switch>
      </Router>
    )
  }
}

export default App