import React from 'react'
import Puff from './Puff'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {showNav, hideNav} from '../actions/nav'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    } 

   this.showNav = this.showNav.bind(this) 

  }

  showNav() {
    this.props.nav.navToggle ? 
      this.props.dispatch(hideNav()) :
      this.props.dispatch(showNav())
  }

  render(){
    //console.log(this.props.nav)
    return(
      <div className='main'>
        <div className='puff'>
          <Puff/>
        </div>
        <div className='navbar'>
          <button className='butnav' onClick={this.showNav}>Navigate</button>          
          {this.props.nav.navToggle && <Navbar/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let nav = state.nav
  //console.log('map', nav)
  return {
    nav
  }

}

export default connect(mapStateToProps)(Main)