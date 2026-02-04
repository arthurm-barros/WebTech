const Add = document.getElementById('add')
const backdropDiv = document.querySelector('.dialog-backdrop-div')
const dialog = document.getElementById('form-modal')

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