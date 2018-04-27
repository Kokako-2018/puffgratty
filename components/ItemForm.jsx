import React from 'react'
import {connect} from 'react-redux'
import {actions, Control, Errors, Form} from 'react-redux-form'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

// import itemColors from '../itemColors'
import themeNames from '../themeNames'
import {addItem} from '../actions/items'
// import ColorChooser from './ColorChooser'
import ThemeChooser from './ThemeChooser'

class ItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (item) {
    const {dispatch} = this.props
    console.log('HandleSUb',item)
    dispatch(addItem(item))
    dispatch(actions.reset('item'))
  }

  render () {
    return (
      <Form model='item' onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <Control.text model='.name'
          className='u-full-width' validateOn='blur'
          validators={{isRequired: name => name && name.length}}
        />
        <Errors model=".name" className="error" show='touched'
          messages={{isRequired: 'Please provide a name.'}}
        />

        <label>Location:</label>
        <Control.textarea model='.location' className='u-full-width' />

        <label>Gratitude:</label>
        <Control.textarea model='.gratitude' className='u-full-width' />

        <ThemeChooser themes={themeNames} />

        <button type='submit' className='button-primary'>Add</button>

        <Link to='/'><button>Back to Puffs</button></Link>

      </Form>
    )
  }
}

export default connect()(ItemForm)
