import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BugSnaxer from './components/bugsnacker.js'
import BugsnaxList from './components/BugsnaxList.js'
import Bugsnax from './components/Bugsnax.js'
import Grumpuses from './components/Grumpuses.jsx'
import Locations from './components/locations.jsx'
import Location from './components/location.jsx'
import Grumpus from './components/Grumpus.jsx'






class App extends Component {
  

  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BugSnaxer} />
          <Route exact path="/bugsnaxlist" component={BugsnaxList} />
          <Route exact path="/bugsnax/:id" component={Bugsnax} />
          <Route exact path="/grumpuses/:id" component={Grumpus} />
          <Route exact path="/grumpuses/" component={Grumpuses} />       
          <Route exact path="/locations/:id" component={Location} />
          <Route exact path="/locations/" component={Locations} />
        </Switch>
      </Router>
    )
  }
}

export default App