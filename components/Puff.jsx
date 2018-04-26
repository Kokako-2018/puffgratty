import React from 'react'
import data from '../data/grats'

class Puff extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    } 
  }


  render(){
    return(
      <div>
      {data.grats.map((grat) => {
        var x = Math.floor(Math.random()*1000)
        var y = Math.floor(Math.random()*1000)
        var positionStyle = {position: 'absolute', top: x, left: y}
        return (
          <div>
            <h2 style={positionStyle}>{grat.name}</h2>
          </div>
        )
      })}
      {/* <h1>{data.grats[0].name}</h1> */}
      </div>
    )
  }
}

export default Puff