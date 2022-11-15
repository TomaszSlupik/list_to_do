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

    const checkInput = document.querySelectorAll('.checkInput')

    checkInput.forEach(el=> el.addEventListener('click', ()=> {
        if (el.checked == true) {
            el.classList.add('TaskIsDone')
            el.parentElement.classList.add('TaskIsDone')
        }
        else {
            el.classList.remove('TaskIsDone')
            el.parentElement.classList.remove('TaskIsDone')
        }
    }))



    tabletask.push(newTask, newcheck)
    console.log(tabletask)

    


    }

const taskComplited = () => {
    tabletask.forEach(el => {
        if (el.className == "checkInput TaskIsDone" &&  el.className == "task TaskIsDone") {
            el.classList.remove('active')
            console.log(el)
        }   
        else if (el.className == "checkInput") {
            el.classList.add('active')
        }

        else if (el.className == "task") {
            el.classList.add('active')
        }

         else if (el.className == "checkInput active" && el.className == "task active") {
            el.classList.remove('active')
            
        }
    })

    console.log(tabletask)
}


btn.addEventListener('click', addTask)
checkboxcompletedinput.addEventListener('click', taskComplited)



