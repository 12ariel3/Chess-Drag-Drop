const king = document.querySelector('.chess-piece')
const infoDisplay = document.querySelector('#info')


const squares = document.querySelectorAll('.square')

king.addEventListener('dragstart', dragStart)

squares.forEach(square =>{
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop)
})

let beingDragged
let timerId

function dragStart(e){
    clearInterval(timerId)
    beingDragged = e.target
    infoDisplay.innerHTML = 'you are dragging the ' + beingDragged.id
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.target.classList.add('highlight')
}

function dragLeave(e){
    e.target.classList.remove('highlight')
}

function dragDrop(e){
    e.target.classList.remove('highlight')
    e.target.appendChild(beingDragged)
    infoDisplay.innerHTML = 'you dropped the ' + beingDragged.id
    timerId = setTimeout(()=>{infoDisplay.innerHTML = ''}, 2000)
}