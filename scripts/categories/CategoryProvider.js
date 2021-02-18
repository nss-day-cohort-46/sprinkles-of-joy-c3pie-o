import { bakeryAPI } from "../Settings.js"

let categories = []

export const useCategories = () => {
  return categories.slice()
  // const cat = useCategories()
  // console.log('cat: ', cat);
}

export const getCategories = () => {
  // debugger
  return fetch(`${bakeryAPI.baseURL}/categories`)
    .then(response => response.json())
    .then(categoriesArray => {
      // console.log('categoriesArray: ', categoriesArray);
      categories = categoriesArray
      
    })
}
