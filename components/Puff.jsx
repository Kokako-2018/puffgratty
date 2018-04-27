import React from 'react'
import data from '../data/grats'
import {connect} from 'react-redux'

class Puff extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    } 
  }


  render(){
    return(
      <React.Fragment>
        {data.grats.map((grat) => {
          var x = Math.floor(Math.random()*1000)
          var y = Math.floor(Math.random()*1000)
          var positionStyle = {position: 'absolute', top: x, left: y}
          return (
            <div className='pulse' style={positionStyle}>
              <h2>{grat.name}</h2>
              <p>{grat.gratitude}</p>
            </div>
          )
        })}
        {/* <h1>{data.grats[0].name}</h1> */}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  console.log("puffstate", state.items)
  let items = state.items
  console.log('Puffmap', items)
  return {
    items
  }
}

export default connect(mapStateToProps)(Puff)
