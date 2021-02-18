import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { Product } from "./Product.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")

let bakeryProducts = []
let bakeryCategories = []

export const ProductList = () => {
  getProducts()
    .then(getCategories)
    .then(() => {
      bakeryProducts = useProducts()
      bakeryCategories = useCategories()
      render()
      
    })
}

// eventHub.addEventListener("change", changeEvent => {
//   // Only do this if the `EaterySelect` element was changed
//   if (changeEvent.target.id === "eateryButton") {
//       const eateryThatWasChosen = changeEvent.target.value
//       // Create custom event. Provide an appropriate name.
//       const eateryCustomEvent = new CustomEvent("eateryChosen", {
//           detail: {
//               eateryThatWasChosen: parseInt(eateryThatWasChosen)
//           }
//       })

//       // Dispatch to event hub
//       eventHub.dispatchEvent(eateryCustomEvent)
//   }
// })

const render = () => {
  contentTarget.innerHTML = bakeryProducts.map(product => {
    const productCategory = bakeryCategories.find(category => category.id === product.categoryId)

    return Product(product, productCategory)
  }).join("")
}


// const render = (productCollection) => {
//   contentTarget.innerHTML = `
//     <select class="dropdown" id="productSelect">
//     <option value="0">Please select a product...</option>
//     ${productCollection.map(productObject => 
//         `<option value="${productObject.id}">${productObject.name}</option>`).join("")
//     }
// </select>