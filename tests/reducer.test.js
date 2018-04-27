import nav from '../reducers/nav'

test('Reducer initial state', () => {
  //Arrange  
  const expected = {
    navToggle: false
  }
  const action = {}
  //Act  
  const actual = nav(undefined, action)
  //Assert  
  expect(actual).toEqual(expected)
})


test('SHOW NAV case', () => {
  //Arrange    
  const expected = {navToggle: true}
  const action = {
    type: 'SHOW_NAV'
  }
  //Act  
  const actual = nav(undefined, action)
  //Assert  
  expect(actual).toEqual(expected)
})


test('HIDE NAV case', () => {
  //Arrange  
  const expected = {navToggle: false}
  const action = {
    type: 'HIDE_NAV'
  }
  const initialState = {navToggle: true}
  //Act  
  const actual = nav(initialState, action)
  //Assert  
  expect(actual).toEqual(expected)
})