import React from 'react'

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
        <button className='addpuff'>Add Puff</button> <br/>
        {this.state.themes.map((theme) => {
          return <button>{theme}</button>        
        })}
      </div>
    )
  }
}

export default Navbar