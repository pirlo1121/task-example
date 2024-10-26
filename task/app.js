const input = document.getElementById('taskInput')
const btn = document.getElementById('btn')
const lista = document.getElementById('taskList')

btn.addEventListener('click',()=>{
  const texto = input.value
  const task = document.createElement('li')
  task.textContent = texto
  const btn = document.createElement('button')
  btn.className = 'btnDelete'
  btn.textContent = 'eliminar'

  task.appendChild(btn)
  lista.appendChild(task)

  btn.addEventListener('click', ()=>{
    lista.removeChild(task)
  })

  input.value = ''
})