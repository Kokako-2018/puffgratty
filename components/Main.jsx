import React from 'react'
import Puff from './Puff'
import Navbar from './Navbar'
import {connect} from 'react-redux'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    } 
  }

  showNav() {

  }

  render(){
    return(
      <div className='main'>
        <div className='puff'>
          <Puff/>
        </div>
        <div className='navbar'>
          <button className='butnav' onClick={this.showNav}>Navigate</button>          
          <Navbar/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  
}

export default connect(mapStateToProps)(Main)