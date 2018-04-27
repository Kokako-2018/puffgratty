import React from 'react'
import Main from './Main'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import ItemsContainer from '../containers/ItemsContainer.js'
import Animation from './Cloud/Animation'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/form' component={ItemsContainer}/>
          <Route exact path='/' component={Main}/>
          <Route exact path='/animation' component={Animation} />          
        </React.Fragment>
      </Router>
    )
  }
}

export default App
