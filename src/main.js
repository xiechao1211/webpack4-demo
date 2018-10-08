import './styles/main.less'
import './styles/index.css'

let arr = [1,3,4,5]
arr.map(item=>{
    console.log(item)
})
let test = document.querySelector('#test')
setInterval(()=>{
    test.innerHTML = (Math.random() * 100).toFixed(2)
},1000)

