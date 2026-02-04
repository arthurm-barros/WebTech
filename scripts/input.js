const Add = document.getElementById('add')
const backdropDiv = document.querySelector('.dialog-backdrop-div')
const dialog = document.getElementById('form-modal')
const cadastreButton = document.querySelector('.cadastre-button')

function updatePage() {
    const containerLocal = document.querySelector('#container-local')
    let index = containerLocal.children.length
    const products = JSON.parse(localStorage.getItem('products'))
    const product = products[index]

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

Add.addEventListener('click', (event)=> {
    event.preventDefault()
    dialog.showModal()
    dialog.style.display = 'grid'
    backdropDiv.style.display = 'block'
    dialog.blur()
})

document.addEventListener('click', (event) => {
    if (event.target === document.documentElement) {
        backdropDiv.style.display = 'none'
        dialog.close()
        dialog.style.display = 'none'
    }
})

cadastreButton.addEventListener('click', () => {
    const nameInput = dialog.querySelector('#name')
    const categorySelect = dialog.querySelector('#catego')
    const priceInput = dialog.querySelector('#preco')
    const qtdInput = dialog.querySelector('#quantia')
    const descriptionTextarea = dialog.querySelector('#descrip')

    const productObject = {
        name: nameInput.value,
        category: categorySelect.value,
        price: priceInput.value,
        quantity: qtdInput.value,
        description: descriptionTextarea.value
    }

    nameInput.value = ''
    categorySelect.value = 'Acessórios'
    priceInput.value = ''
    qtdInput.value = 0
    descriptionTextarea.value = ''

    if (localStorage.getItem('products') === '') {
        localStorage.setItem('products', JSON.stringify([productObject]))
    } else {
        const products = JSON.parse(localStorage.getItem('products'))
        products.push(productObject)
        localStorage.setItem('products', JSON.stringify(products))
    }
    updatePage()
})