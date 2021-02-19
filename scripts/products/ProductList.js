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
      render(bakeryProducts, bakeryCategories)
      
    })
}


const render = () => {
  contentTarget.innerHTML = bakeryProducts.map(
    (product) => {
      // console.log('product: ', product);
    const productCategory = bakeryCategories.find(category => category.id === product.categoryId)

    return Product(product, productCategory)
  }).join("")
}


eventHub.addEventListener("categorySelected", changeEvent => {
  if (changeEvent.detail.selectedCategory === "0"){
    return contentTarget.innerHTML = ProductList()
    
  }
  else { (changeEvent.detail.selectedCategory !== "0")
    const categoryArray = useCategories()
    // console.log('categoryArray: ', categoryArray);
    const categoryItem = changeEvent.detail.selectedCategory
    
    const categoryChosen = categoryArray.find(categoryObj => categoryObj.id === categoryItem)
    
    const productsArray = useProducts()

    const matchingProducts = productsArray.filter(productObj => productObj.categoryId === categoryChosen.id)

    contentTarget.innerHTML = matchingProducts.map(productObj => Product(productObj, categoryChosen)).join("")
  }
  }
  //   render(matchingProducts)
    
  //   console.log('matchingProducts: ', matchingProducts);
  // }
)

// const render = (productCollection) => {
//   contentTarget.innerHTML = `
//     <select class="dropdown" id="productSelect">
//     <option value="0">Please select a product...</option>
//     ${productCollection.map(productObject => 
//         `<option value="${productObject.id}">${productObject.name}</option>`).join("")
//     }
// </select>