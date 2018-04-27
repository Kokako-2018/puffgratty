require('babel-register')
// import {addItem} from '../actions/item'
const {addItem} = require('../actions/items')


test('Add Item works', () => {
  //Arrange
  const item = 'Maddy'
  const expected = {
    type: 'ADD_ITEM',
    item: item
  }

  //Act
  const actual = addItem(item)

  //Assert
  expect(actual).toEqual(expected)
})