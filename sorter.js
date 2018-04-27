// import React from 'react'
// import Items from 'Items.jsx'

// export default function Sorter(themes) {

//     const alphabet = 'abcdefghijklmnopqrstuvwxyz '.split('') //create an ordered alphabet array

//     const isEarlier = (a, b, i) => {
//     if (a[i] == b[i]) return isEarlier(a, b, i + 1)
//     else {
//         const aIdx = alphabet.findIndex(char => char == a[i].toLowerCase())
//         const bIdx = alphabet.findIndex(char => char == b[i].toLowerCase())
//         const diff = aIdx - bIdx
//         return diff <= 0
//     }
//     }

//     const alphabetSort = actual => {
//     const sorted = [] //create empty sorted array
//     actual.forEach((thing, i) => {
//         if (sorted.length == 0) sorted.push(thing) //nothing to compare so just push it in
//         else {
//         var found = sorted.find((theme, idx) => {
//             if (isEarlier(thing.name, theme.name, 0)) {
//             return sorted.splice(idx, 0, thing)
//             }
//         })
//         if (!found) sorted.push(thing)
//         }
//     })
//     return sorted
//     }
// }