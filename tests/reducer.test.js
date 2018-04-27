// const catReducer = require('../client/reducer')

// test('Reducer initial state', () => {
//   const expected = []
//   const action = {}

//   const actual = catReducer(undefined, action)

//   expect(actual).toEqual(expected)
// })

// test('Add Cat case', () => {
//   const cat = {
//     name: 'Harrison'
//   }
//   const expected = [
//     cat
//   ]
//   const action = {
//     type: 'ADD_CAT',
//     cat
//   }

//   const actual = catReducer([], action)

//   expect(actual).toEqual(expected)
//   expect(actual[0]).toBe(cat)
// })

// test('Add a second Cat case', () => {
//   const initialState = [
//     {name: 'Rosie'}
//   ]
//   const cat = {
//     name: 'Harrison'
//   }
//   const action = {
//     type: 'ADD_CAT',
//     cat
//   }

//   const expectedState = [
//     {name: 'Rosie'},
//     cat
//   ]

//   const actual = catReducer(initialState, action)

//   expect(actual).toEqual(expectedState)
//   expect(actual[1]).toBe(cat)
// })

// test('delete cat case', () => {
//   const cat = {
//     name: 'Rosie'
//   }
//   const action = {
//     type: 'DEL_CAT',
//     cat
//   }
//   const initialState = [
//     cat,
//     {name: 'Harrison'},
//     {name: 'Excellent'}
//   ]
//   // const expected = []

//   const actual = catReducer(initialState, action)

//   // expect(actual).toEqual(expected)
//   expect(actual).toHaveLength(initialState.length - 1)
//   expect(actual.find(actualCat => actualCat.name == cat.name)).toBeFalsy()
// })