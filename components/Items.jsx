import React from 'react'

import EditItemForm from './EditItemForm'
import ItemForm from './ItemForm'
import Sorter from '../sorter'

class Items extends React.Component {
  deleteItem (evt, id) {
    evt.preventDefault()
    this.props.deleteItem(id)
  }

  getItem (item) {
    const {id, name, location, gratitude, theme} = item
    console.log(item)
    return (
      <tr key={id} className="item" onClick={() => this.props.editItem(id)} onContextMenu={(evt) => this.deleteItem(evt, id)}>
        <td className="item-name">{name}</td>
        <td className="item-description">{location}</td>
        <td className="item-description">{gratitude}</td>
        <td className="item-theme" style={{backgroundColor: 'lightgreen'}}>{theme}</td>
        {/* styling note: appearance.color could change to grats.theme */}
      </tr>
    )
  }

  render () {
    const editing = this.props.items.find(item => item.isEditing)
    return (
      <div className="row">
        <div className="two-thirds column">
          <table className="u-full-width">
            <thead>
              <tr>
                <th className="item-name">Name</th>
                <th className="item-description">Location</th>
                <th className="item-description">Gratitude</th>
                <th className="item-color">Theme</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {this.props.items.map(item => this.getItem(item))}
            </tbody>
          </table>
        </div>

        <div className="one-third column">
          <h2>{editing ? 'Edit' : 'Add an'} item</h2>
          {editing ? (<EditItemForm />) : (<ItemForm />)}

          <p>Use the form above to add your own to PuffGratty!</p>
        </div>
      </div>
    )
  }
}

export default Items
