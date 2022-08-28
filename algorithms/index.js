// const find_smallest = (arr) => {
//   let smallest = arr[0]
//   let smallest_index = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i]
//       smallest_index = i
//     }
//   }
//   return smallest_index
// }
// const selection_sort = (arr) => {
//   let newArr = []
//   let length = arr.length
//   for (let i = 0; i < length; i++) {
//     let smallest = find_smallest(arr)
//     newArr.push(arr.splice(smallest, 1)[0])
//   }
//   return newArr
// }
// console.log(selection_sort([5, 3, 6, 122121, 10])) // [2, 3, 5, 6, 10]

const find_greatest = (arr) => {
  let greatest = arr[0]
  let greatest_index = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greatest) {
      greatest = arr[i]
      greatest_index = i
    }
  }
  return greatest_index
}
const selection_sort = (arr) => {
  let newArr = []
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let greatest = find_greatest(arr)
    newArr.push(arr.splice(greatest, 1)[0])
  }
  return newArr
}
console.log(selection_sort([5, 3, 6, 122121, 10])) // [122121, 10, 6, 5, 3]
