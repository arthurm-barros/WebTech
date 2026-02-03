const Add = document.getElementById('add')
const backdropDiv = document.querySelector('.dialog-backdrop-div')
const dialog = document.getElementById('form-modal')

Add.addEventListener('click', (event)=> {
    event.preventDefault()
    dialog.showModal()
    dialog.style.display = 'grid'
    backdropDiv.style.display = 'block'
})

backdropDiv.addEventListener('click', () => {
    backdropDiv.style.display = 'none'
    dialog.close()
    dialog.style.display = 'none'
    console.log('A')
})