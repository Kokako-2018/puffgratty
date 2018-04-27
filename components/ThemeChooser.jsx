import React from 'react'
import {Control, Errors, Fieldset} from 'react-redux-form'

// Here's an example of separating a component or group of components
// so that it can be re-used in other forms. Notice that the Fieldset has a
// `model` prop of ".appearance". This means that our items will gain a
// property that looks like:
//
//   appearance: {
//     theme: 'cornflowerblue'
//   }
//
// We could also add other form elements to the fieldset, like a checkbox
// that determines if the item is highlighted, or a slider for opacity.

const ThemeChooser = ({themes}) => (
  <Fieldset model=".appearance">
    <label>Theme:</label>

    <Control.select model=".theme" className="u-full-width"
      validators={{isChartreuse: theme => theme !== 'chartreuse'}}>
      {themes.map(theme => <option key={theme} value={theme}>{theme}</option>)}
    </Control.select>

    <Errors model='.theme' className='error' show="touched"
      messages={{isChartreuse: 'Nobody likes chartreuse.'}}
    />
  </Fieldset>
)

export default ThemeChooser
