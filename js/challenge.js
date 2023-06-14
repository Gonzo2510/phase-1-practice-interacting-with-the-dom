//counter
counter = document.getElementById("counter")
let myInterval = setInterval(() => {
    counter.innerHTML++
}, 1000);

myInterval

//variables
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')

//add/subtract to counter
minus.addEventListener('click', () => counter.innerHTML--)
plus.addEventListener('click', () => counter.innerHTML++)

//like button
const likedArray = []
const like = () => {
    const likes = document.querySelector('.likes')
    const li = document.createElement("li")
    li.setAttribute('data-num', counter.innerHTML)
    

    likedArray.push(counter.innerHTML)
    let count = likedArray.filter(element => element === counter.innerHTML).length
    li.textContent = `${counter.innerHTML} has been liked ${count} time`
   
    //append to likes ul
    dataNum = document.querySelector(`[data-num="${counter.innerHTML}"]`)
    // change numbers that have been liked
    if (count > 1) {
        dataNum.innerHTML = `${counter.innerHTML} has been liked ${count} times`
    } else {likes.appendChild(li)}

}
heart.addEventListener('click', like)

//StartStop button
const startStopBtn = document.getElementById('pause')
const buttons = document.querySelectorAll("button")
startStopBtn.addEventListener("click", () => {
    if (myInterval) {
        clearInterval(myInterval)
        myInterval = null
        buttons.forEach((button) => button.disabled = true)
        startStopBtn.disabled = false
        startStopBtn.textContent = "resume"
    } else {
        myInterval = setInterval(() => {
            counter.innerHTML++
        }, 1000)
        buttons.forEach((button) => button.disabled = false)
        startStopBtn.textContent = "pause"
    }
})


















//leave a comment
document.querySelector('form').addEventListener("submit", (event)=> {
    event.preventDefault()
    const ul = document.createElement("ul")
    ul.textContent = event.target['comment-input'].value
    const comments = document.getElementById("list")
    comments.appendChild(ul)
})