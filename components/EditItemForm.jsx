import React from 'react'
import {connect} from 'react-redux'
import {Control, Errors, Form, track} from 'react-redux-form'

// import itemColors from '../itemColors'
import themeNames from '../themeNames'
// import ColorChooser from './ColorChooser'
import ThemeChooser from './ThemeChooser'
import {getItems, saveItem, stopEditing} from '../actions/items'

class EditItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  handleSubmit (item) {
    const {dispatch} = this.props
    dispatch(saveItem(item))
    dispatch(stopEditing())
  }

  cancel (e) {
    const {dispatch} = this.props
    dispatch(getItems())
    dispatch(stopEditing())
    e.preventDefault()
  }

  render () {
    return (
      <Form model={track('items[]', {isEditing: true})}
        onSubmit={this.handleSubmit}>

        <label>Name:</label>
        <Control.text model='.name' className='u-full-width'
          validators={{isRequired: name => name && name.length}}
        />
        <Errors model='.name' className='error'
          messages={{isRequired: 'Please provide a name.'}}
        />

        <label>Location:</label>
        <Control.textarea model=".location" className="u-full-width" />

      <label>Gratitude:</label>
        <Control.textarea model='.gratitude' className='u-full-width' />

        <ThemeChooser themes={themeNames} />

        <button type="submit" className="button-primary">Save</button>
        <button onClick={this.cancel}>Cancel</button>
      </Form>
    )
  }
}

export default connect()(EditItemForm)
