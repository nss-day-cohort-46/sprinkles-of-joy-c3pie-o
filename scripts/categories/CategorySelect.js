import { getCategories, useCategories } from "./CategoryProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".filter__category")

// let categories = []

export const CategorySelect = () => {
  // debugger
  getCategories()
  .then(() => {
    const categories = useCategories()
    // console.log('categories: ', categories);
    render(categories)
  })
}

const render = (categoriesArray) => {
  // debugger
  contentTarget.innerHTML = `
  <p>cats</p>
      <select class="dropdown" id="categorySelect">
      <option value="0">All baked goods...</option>
      ${categoriesArray.map(category => `<option value="${category.id}">${category.name}</option>`).join("")}
      </select>
      `
    }

eventHub.addEventListener("change", changeEvent => {
  // debugger
  if (changeEvent.target.id === "categorySelect") {
    const categoryCustomEvent = new CustomEvent("categorySelected", {
      detail: {
        selectedCategory: parseInt(changeEvent.target.value)
      }
    })
    eventHub.dispatchEvent(categoryCustomEvent)
  }
})

