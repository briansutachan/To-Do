const add = document.querySelector(`.add`)
const todo = document.querySelector(`.todo ul`)
const done = document.querySelector(`.done ul`)
const todone = document.querySelectorAll(`.to button`)
const del = document.querySelector(`.delete`)


function addTodo(e) {
    const stuff = window.prompt("Add todo item")
    if (stuff === null) return
    todo.innerHTML += `
    <li class="to"> ${stuff} <button>></button></li>
    `
    const todone = document.querySelectorAll(".to button")
    todone.forEach(function (change) {
        change.addEventListener(`click`, function (e) {
            moveTodo(e)
        })
    })
}

function moveTodo(e) {
    done.appendChild(e.target.parentNode)
    e.target.parentNode.removeChild(e.target)
}

add.addEventListener('click', function (e) {
    addTodo(e)
})

todone.forEach(function (change) {
    change.addEventListener(`click`, function (e) {
        moveTodo(e)
    })
})

del.addEventListener(`click`, function (e) {
    const doneItems = done.querySelectorAll("li")

    done.removeChild(doneItems[0])
})

