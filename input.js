const Add = document.getElementById('add')
const form = document.getElementById('form-modal')
Add.addEventListener('click', (event)=> {
    event.preventDefault()
    form.style.display = 'grid'
})
form.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target === form){
    form.style.display = 'none'
    }
})