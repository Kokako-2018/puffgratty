export const SHOW_NAV = 'SHOW_NAV' 

export const showNav = () => {
  console.log('helo action')
  return {
    type: 'SHOW_NAV'
  }

}

export const hideNav = () => {
  return{
    type: 'HIDE_NAV'
  }
}