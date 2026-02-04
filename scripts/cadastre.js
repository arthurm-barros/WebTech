const Add = document.getElementById('add')
const backdropDiv = document.querySelector('.dialog-backdrop-div')
const dialog = document.getElementById('cadastre-modal')
const cadastreButton = document.querySelector('.cadastre-button')

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

    if (!nameInput.value) {
        alert('Digite um nome para o produto')
        return
    }

    const productObject = {
        name: nameInput.value,
        category: categorySelect.value,
        price: Number.parseFloat(priceInput.value).toFixed(2),
        quantity: Number(qtdInput.value),
        description: descriptionTextarea.value
    }

    nameInput.value = ''
    categorySelect.value = 'Acessórios'
    priceInput.value = ''
    qtdInput.value = 0
    descriptionTextarea.value = ''

    if (localStorage.getItem('products') === '') {
        productObject.id = 1
        localStorage.setItem('products', JSON.stringify([productObject]))
    } else {
        const products = JSON.parse(localStorage.getItem('products'))
        productObject.id = products.length + 1
        products.push(productObject)
        localStorage.setItem('products', JSON.stringify(products))
    }
    location.reload()
})