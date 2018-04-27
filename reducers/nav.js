export const SHOW_NAV = 'SHOW_NAV'

const initialNav = {
  navToggle: false
}

const nav = (state = initialNav, action) => {
  console.log('hello reducer', action)
  switch (action.type) {
    case 'SHOW_NAV':
      var toggle = {navToggle: true}
      return toggle
    case 'HIDE_NAV':
      var toggle = {navToggle: false}
      return toggle        
    default:
      return state  
  }
}





export default nav