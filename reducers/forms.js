import {createForms} from 'react-redux-form'

import items from './items'

export const item = {
  name: '',
  location: '',
  gratitude: '',
  theme: ''
  // appearance: {
  //   color: 'aliceblue',
  // }
}

export default createForms({
  item,
  items
})
