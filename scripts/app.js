const containerLocal = document.querySelector('#container-local')

document.addEventListener('DOMContentLoaded', () => {
    const productsLSString = localStorage.getItem('products')

    if (!productsLSString) {
        return
    }
    for (let product of JSON.parse(productsLSString)) {
        containerLocal.insertAdjacentHTML(
            'afterbegin',
            `
            <div class="container">
                <div class="image-column">
                    <div class="image-container">
                        <img class="eletronic" src="../images/Social.png">
                    </div>
                    <div class="buttons">
                        <button class="button-edit">
                            <i class="bi bi-pencil-square"></i>
                            <span>Editar</span>
                        </button>
                        <button class="button-delete" data-productid="${product.id}">
                            <i class="bi bi-trash"></i>
                            <span>Excluir</span>
                        </button>
                    </div>
                </div>
                <div class="data">
                    <h3 class="title">${product.name.slice(0, 27)}${product.name.length > 26 ? '...' : ''}</h3>
                    <strong class="category"><span>Categoria:</span>${product.category}</strong>
                    <p class="description">${product.description ? product.description : 'Sem descrição para este produto'}</p>
                    <div class="numbers">
                        <span class="price">Preço: R$${product.price}</span>
                        <span class="quantity">Quantidade: ${product.quantity}</span>
                    </div>
                </div>
            </div>
            `
        )
    }

    const deleteButtons = document.querySelectorAll('.button-delete')
    for (let button of deleteButtons) {
        button.addEventListener('click', () => {
            const products = JSON.parse(productsLSString)
            const _products = []
            for (let product of products) {
                if (product.id != button.dataset.productid) {
                    _products.push(product)
                }
            }
            localStorage.setItem('products', JSON.stringify(_products))
            location.reload()
        })
    }
})