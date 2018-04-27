import {combineReducers} from 'redux'

import forms from './forms'

import nav from './nav'
``
export default combineReducers({
  ...forms, nav
})
