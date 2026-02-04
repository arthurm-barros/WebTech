const containerLocal = document.querySelector('#container-local')

document.addEventListener('DOMContentLoaded', () => {
    const productsLSString = localStorage.getItem('products')

    if (!productsLSString) {
        return
    }
    for (let product of JSON.parse(productsLSString)) {
        containerLocal.insertAdjacentHTML(
            'beforebegin',
            `
            <div class="container">
                <h3 class="title">${product.name}</h3>
                <strong class="category">${product.category}</strong>
                <p class="description">${product.description}</p>
                <span class="price">${product.price}</span>
                <span class="numbers">A</span>
                <img class="eletronic" src="../images/Social.png">
            </div>
            `
        )
    }
})