const containerLocal = document.querySelector('#container-local')
const editModal = document.querySelector('#edit-modal')
const baskdropDiv = document.querySelector('.dialog-backdrop-div')
document.addEventListener('DOMContentLoaded', () => {
    // Tema
    const theme = localStorage.getItem('theme')
    if (theme === 'dark_theme') {
        body.id = 'dark_theme'
    }

    // Produtos
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
                        <button class="button-edit" data-productid="${product.id}">
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

    const editButtons = document.querySelectorAll('.button-edit')
    for (let button of editButtons) {
        button.addEventListener('click', () => {
            editModal.showModal()
            editModal.style.display = 'grid'
            backdropDiv.style.display = 'block'
            editModal.blur()

            const nameInput = editModal.querySelector('#name')
            const categorySelect = editModal.querySelector('#catego')
            const descriptionTextarea = editModal.querySelector('#descrip')
            const priceInput = editModal.querySelector('#preco')
            const quantityInput = editModal.querySelector('#quantia')
            const saveButton = editModal.querySelector('button')

            const products = JSON.parse(productsLSString)
            for (let product of products) {
                if (product.id == button.dataset.productid) {
                    nameInput.value = product.name
                    categorySelect.value = product.category
                    descriptionTextarea.value = product.description
                    priceInput.value = product.price
                    quantityInput.value = product.quantity
                }
            }

            saveButton.addEventListener('click', () => {
                for (let product of products) {
                    if (product.id == button.dataset.productid) {
                        product.name = nameInput.value
                        product.category = categorySelect.value
                        product.description = descriptionTextarea.value
                        product.price = priceInput.value
                        product.quantity = quantityInput.value
                        localStorage.setItem('products', JSON.stringify(products))
                        location.reload()
                    }
                }
            })
        })
    }
})

document.addEventListener('click', (event) => {
    if (event.target === document.documentElement) {
        backdropDiv.style.display = 'none'
        editModal.close()
        editModal.style.display = 'none'
    }
})