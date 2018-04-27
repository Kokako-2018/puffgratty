import {combineReducers} from 'redux'

import forms from './forms'
import items from './items'
import nav from './nav'
``
export default combineReducers({
  ...forms, nav, items
})
