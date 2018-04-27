import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      themes: ['All','Health/Wellness','Nature/Environment','Relationships','Basic Necessities','General\/Other']
    } 
  }


  render(){
    return(
      <div>
        
      <Link to='/form'>  <button className='addpuff'>Add Puff</button></Link>
      <br/>

        {this.state.themes.map((theme) => {
          return <button>{theme}</button>       
        })}

      </div>
    )
  }
}

export default Navbar