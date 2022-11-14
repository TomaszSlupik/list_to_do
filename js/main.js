const btn = document.querySelector('.btn')
const taskbox = document.querySelector('.taskbox')
const input = document.querySelector('.input')
const checkboxcompletedinput = document.querySelector('.checkboxcompletedinput')


const tabletask = []

const addTask = () => {

    const newTask = document.createElement('div')
    newTask.setAttribute('class', 'task')
    const newcheck = document.createElement('input')
    newcheck.setAttribute('class', 'checkInput')
    newcheck.setAttribute('type', 'checkbox')
    newTask.textContent = input.value
    taskbox.append(newTask)
    newTask.append(newcheck)

    tabletask.push(newTask, newcheck)
    console.log(tabletask)
}

const taskComplited = () => {
    tabletask.forEach(el => {
        el.classList.toggle('active')
        console.log(el)
    })
}




btn.addEventListener('click', addTask)
checkboxcompletedinput.addEventListener('click', taskComplited)