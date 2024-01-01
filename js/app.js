let scrollEl = document.querySelector("#scroll")
let documentHeight  = document.body.clientHeight
let windowHeight = window.innerHeight
let scrollTop , calc;
window.addEventListener("scroll",()=>{
    scrollTop = document.documentElement.scrollTop
    calc = Math.round((scrollTop/(documentHeight-windowHeight))*100)
    scrollEl.style.width = `${calc}%`
})