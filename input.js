const Add = document.getElementById('add')
const form = document.getElementById('form-modal')
const fechado = document.getElementById('saidera')
Add.addEventListener('click', (event)=> {
    event.preventDefault()
    form.style.display = 'grid'
})
fechado.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target === form){
    form.style.display = 'none'
    }
})