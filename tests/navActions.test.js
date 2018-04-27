import {showNav, hideNav} from '../actions/nav'

test('showNav action', () => {
  //Arrange  
  const expected = {
        type: 'SHOW_NAV'
    }
  //Act  
  const actual = showNav()
  //Assert  
  expect(actual).toEqual(expected)
})


test('hideNav', () => {
  //Arrange  
  const expected = {
        type: 'HIDE_NAV'
    }
  //Act  
  const actual = hideNav()
  //Assert  
  expect(actual).toEqual(expected)
})