import './styles/main.less'
import './styles/index.css'
import {buppleSort,dumpArr,quickSort,LoopQuene, BST} from './utils'


let arr = [1,2,44,22,55,6,3,2]
let arr2 = Object.assign([],arr)

let arr3 = [
    {id: 1,name: 'xie'},
    {id: 5,name: 'chao'},
    {id: 1,name: 'jordan'},
    {id: 3,name: 'dd'},
    {id: 2,name: 'ee'},
]
// console.log(buppleSort(arr))
// console.log(arr2)
let hash = {}
// arr3 = arr3.reduce((prev,cur,index)=>{
//     // 将cur的id放入hash对象中, 以cur的id作为hash的key
//     console.log(hash)
//     hash[cur.id] ? "" : hash[cur.id] = true && prev.push(cur)

//     // if(!hash[cur.id]){
//     //     hash[cur.id] = true
//     //     prev.push(cur)
//     // }
//     console.log(hash)
//     // console.log(cur)
//     // console.log(obj)
//     return prev
// },[])
// 数组去重
arr3 = dumpArr(arr3,'id')
// arr3[0]['id'] = 2222

console.log(arr3)
console.log(quickSort(arr))

const debounce = function(func, wait) {
    // 设置定时器
    let timmer;
    return (...args) => {
        let that = this
        clearTimeout(timmer)
        timmer = setTimeout(()=>{
            func.apply(this,args)
        },wait)
    }
}

let elMain = document.querySelector('#app')
// elMain.addEventListener('mousemove',debounce(function(){
//     console.log(222)
// },500))


// console.log(result)

let scoreArr =   [{ 'name': 'Zhexue',    'score': 62 },
{ 'name': 'Jingjixue', 'score': 33 },
{ 'name': 'Faxue',     'score': 52 },
{ 'name': 'Jiaoyuxue', 'score': 44 },
{ 'name': 'Shuxue', 'score': 47 },
{ 'name': 'Wenxue', 'score': 87 },
{ 'name': 'Xinlixue', 'score': 57 },
{ 'name': 'Yixue', 'score': 43 },
{ 'name': 'Guanlixue', 'score': 47 },
{ 'name': 'Yishuxue', 'score': 52 },
{ 'name': 'Lixue', 'score': 77 },
{ 'name': 'Gongxue', 'score': 79 },
{ 'name': 'Lishixue', 'score': 88 }
]

let maxIndex = 0
scoreArr.forEach((item,index)=>{
    if(scoreArr[maxIndex] <= item){
        maxIndex = index
    }
})


let request = new XMLHttpRequest()
request.open('get','/',true)
request.setRequestHeader('b','2')
request.setRequestHeader('c',3)
request.withCredentials = true
request.onreadystatechange = function(){
    // console.log(request)
}
request.upload.onprogress = (ev)=>{
    console.log(11)
}
// json对象需要序列化成字符串格式
request.send('a=1')

// let array = [1,2,322,2,1,44]
// let array2 = [...new Set(array)]
// console.log(array2)
const obj = {'a':1,'b':2}
// for (const item in obj) {
//     console.log(item)
// }

let lpQuene = new LoopQuene(10)
for (let index = 0; index < 11; index++) {
    // debugger
    lpQuene.enQuene(index)
}
for (let index = 0; index < 8; index++) {
    lpQuene.deQuene()
}

let bst = new BST()
for(let i = 0;i< 30;i++){
    bst.addNode(parseInt(Math.random()*20) )
}
// bst.addNode(5)
// bst.addNode(3)
// bst.addNode(6)
// bst.addNode(7)
console.log(bst)
// bst.preTraversal()
// bst.midTraversal()
// bst.backTraversal()
// bst.wideTraversal()
let cb = function(node){
    // console.log(node)
}
bst.preTraversal(cb)
// console.log(flatArr([1, [[2], [3, [4]], 5,[6,7,[8,9,10]]]]))
function Person(name,age){
    this.name = name
    this.age = age
}
// 静态方法不能继承
Person.test = function(){
    console.log(333333333)
}
// 原型方法可以继承
Person.prototype.tt = ()=>{
    console.log(2222222)
}

function Student(name,age,score){
    // this.proptype = new Person
    // 调用Person构造函数
    Person.call(this,name,age)
    this.score = score
}
// Student.prototype = new Person() // 添加原型绑定
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student

let s = new Student('chao',28,980)
s.name = 'sss'
console.log(s)


