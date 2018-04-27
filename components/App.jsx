import React from 'react'
import Main from './Main'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


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
          {/* <Route exact path='/form' component={Form}/> */}
          <Route exact path='/' component={Main}/>          
        </React.Fragment>
      </Router>
    )
  }
}

export default App
