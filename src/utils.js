export const sleep = (time = 1000)=>{
    return new Promise((resolve, reject) => {
        setTimeout(resolve,time)
    });
}
// 对象是否有某个属性
export const hasOwn = (obj, key)=>{
    // return Obj.hasOwnProperty(key)
    // 保护 hasOwnProperty 属性
    return Object.prototype.hasOwnProperty.call(obj,key)
}
// 数组值交换
function swapArr(arr,indexA,indexB){
    return [arr[indexA],arr[indexB]] = [arr[indexB],arr[indexA]]
}
// 冒泡排序
export const buppleSort = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length - 1 - index; j++) {
            if(arr[j] > arr[j+1]){
                swapArr(arr,j,j+1)
            }
        }

    }
    return arr
}
// 深拷贝 可拷贝对象里的对象
export const deepClone = (obj=>{
    let source = obj instanceof Array ? [] : {}
    for (const item in obj) {
        source[item] = obj[item] instanceof Object ? deepClone(obj[item]) : obj[item]
        // source[item] = typeof obj[item] === 'object' ? deepClone(obj[item]) : obj[item]
    }
    return source
})
// 数组去重
export const dumpArr = (arr,v) =>{
    let curArr = deepClone(arr)
    let hash = {}
    curArr = curArr.reduce((prev,cur)=>{
        // if(!hash[cur.id]){
        //     hash[cur.id] = true
        //     prev.push(cur)
        // }
        hash[cur[v]] ? "" : hash[cur[v]] = true && prev.push(cur)
        return prev
    },[])
    return curArr
}
// 快速排序
export const quickSort = (arr) =>{
    if(arr.length < 1){return arr}

    let centerIndex = Math.floor(arr.length / 2)
    let c = arr.splice(centerIndex,1)
    let left = []
    let right = []
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > c){
            right.push(arr[index])
        }else{
            left.push(arr[index])
        }
    }
    return quickSort(left).concat(c,quickSort(right))
}

// 数组降维
export const flatArr = (arr)=>{
    // return arr instanceof Array ? arr.reduce((prev,cur)=>[...prev,...flatArr(cur)],[]) : [arr]
    if(arr instanceof Array){
        return arr.reduce((prev,cur)=>{
            return [...prev,...flatArr(cur)]
        },[])
    }else{
        return [arr]
    }
}

// 循环队列实现 先进先出
export  class LoopQuene {
    constructor(length){
        // 队列对象（数组形式） 实际队列长度要比给定的长度大1 因为 last与first 要空出1个空闲长度
        this.quene = new Array(length +1)
        //  队列头部索引
        this.first = 0
        // 队列头部索引
        this.last = 0
        // 队列已存储的内容大小
        this.size = 0
    }
    // 进队
    enQuene(item){
        if(this.isMax()){
            // throw Error('队列已满')
            this.resize(this.getLength()*2 +1)
        }
        this.quene[this.last] = item
        this.size ++
        // 防止队满
        this.last = (this.last + 1) % this.quene.length
    }
    // 出队
    deQuene(){
        if(this.isEmpty()){
            throw Error('队列为空')
        }
        let item = this.quene[this.first]
        this.quene[this.first] = null
        this.first = (this.first + 1) % this.quene.length
        this.size --
        // 如果队列内容小于长度的1/4 并且长度不等于2
        if(this.size <= this.quene.length / 4 && this.getLength()/2 > 1){
            this.resize(this.getLength() / 2)
        }
        return item
    }
    // 获取队列头部，但是不移动头部索引
    getHeader(){
        if(this.isEmpty){
            throw Error('队列为空')
        }
        return this.quene[this.first]
    }
    // 获取队列长度
    getLength(){
        return this.quene.length - 1
    }
    // 队列已满
    isMax(){
        return this.first === (this.last +1) % this.quene.length
    }
    isEmpty(){
        return this.first ===  this.last
    }
    //缩放队列
    resize(length){
        console.log(length)
        let newQueue = new Array(length)
        for (let index = 0; index < this.size; index++) {
            newQueue[index] = this.quene[(index + this.first) % this.quene.length]
        }
        this.quene = newQueue
        this.first = 0
        this.last = this.size
    }
}
export class Quene{
    constructor(){
        this.quene = []
    }
    enQuene(item){
        this.quene.push(item)
    }
    deQuene(){
        return this.quene.shift()
    }
    getHeader(){
        return this.quene[0]
    }
    getLength(){
        return this.quene.length
    }
    isEmpty(){
        return this.getLength() === 0
    }
}
// 先进后出
export class Stack {
    constructor(){
        this.stack = []
    }
    push(item){
        this.stack.push(item)
    }
    pop(){
        this.stack.pop()
    }
    peek(){
        let item = this.stack[this.getSize() - 1]
        this.pop()
        return item
    }
    getSize(){
        return this.stack.length
    }
    clear(){
        this.stack = []
    }
}

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
// 二叉搜索树
export class BST{
    constructor(){
        this.root = null
        this.size = 0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size === 0
    }

    addNode(data){
        this.root = this.addChild(this.root,data)
    }
    addChild(node,data){
        // 递归添加，将节点添加到子节点为null的节点下
        if(!node){
            this.size ++
            return new Node(data)
        }
        // 如果节点数据大于增加子节点的数据 那么就在左侧添加，否则在右侧添加
        if(node.data > data){
            node.left = this.addChild(node.left,data)
        }else{
            node.right = this.addChild(node.right,data)
        }
        return node
    }
    // 先序遍历
    preTraversal(cb){
        this._pre(this.root,cb)
    }
    _pre(node,cb){
        if(node){
            // console.log(node) //获取节点数据
            cb(node)
            // console.log(cb)
            this._pre(node.left,cb)
            this._pre(node.right,cb)
        }
    }
    //  中序遍历
    midTraversal(){
        this._mid(this.root)
    }
    _mid(node){
        if(node){
            this._mid(node.left)
            console.log(node)
            this._mid(node.right)
        }
    }
    backTraversal(){
        this._back(this.root)
    }
    _back(node){
        if(node){
            this._back(node.left)
            this._back(node.right)
            console.log(node)
        }
    }
    wideTraversal(){
        if(!this.root){
            return null
        }
        // 根节点入队
        let quene = new LoopQuene(10)
        // let quene = new Quene()
        quene.enQuene(this.root)
        // 取出队首，然后将left入队，再将right入队
        while(!quene.isEmpty()){
            let data = quene.deQuene()
            if(data.left){
                quene.enQuene(data.left)
            }
            if(data.right){
                quene.enQuene(data.right)
            }

        }
    }
    getMin(){
        return this._getMin(this.root)
    }
    _getMin(node){
        if(!node.left){
            return node
        }
        return this._getMin(node.left)
    }
    getMax(){
        return this._getMax(this.root)
    }
    _getMax(node){
        if(!node.right){
            return node
        }
        return this._getMax(node.right)
    }
}
class MultiwayNode{
    constructor(data){
        this.data = data
        this.parent = null
        this.children = []
    }
}
// 带父节点的二叉树
export class MultiwayTree{

}

