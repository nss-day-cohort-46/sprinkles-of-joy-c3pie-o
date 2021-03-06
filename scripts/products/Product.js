import "./ProductList.js"

const eventHub = document.querySelector("#container")

export const Product = (product, category) => {
    return `
        <section class="baked_good">
            <header class="baked_good__header">
                <h4>${product.name}</h4>
                <p>$${product.price}</p>
            </header>
            <div>
                <button id="addProduct--${product.id}">Add to Cart</button>
                <p>${product.description} [${category.name}]</p>
            </div>
            
        </section>
`
}

//why is this in brackets
// debugger
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("addProduct--")) {
        // debugger
        const [prefix, productId] = event.target.id.split("--")
        const addProductEvent = new CustomEvent("addToCart", {
            detail: {
                addedProduct: parseInt(productId)
            }
        })
        eventHub.dispatchEvent(addProductEvent)
    }
})
