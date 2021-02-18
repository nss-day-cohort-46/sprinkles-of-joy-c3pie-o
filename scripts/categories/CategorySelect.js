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
      <select class="dropdown" id="categorySelect">
      <p>cats</P>
      <option value="0">All baked goods...</option>
      ${categoriesArray.map(category => `<option value="${category.id}">${category.name}</option>`).join("")}
      </select>
      `
    }

eventHub.addEventListener("change", changeEvent => {
  if (changeEvent.target.id === "categorySelect") {
    const categoryCustomEvent = new CustomEvent("categorySelected", {
      detail: {
        selectedCategory: changeEvent.target.value
      }
    })
    eventHub.dispatchEvent(categoryCustomEvent)
  }
})

