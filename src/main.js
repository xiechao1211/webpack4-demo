import './styles/main.less'
import './styles/index.css'
import {buppleSort,dumpArr} from './utils'


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
let result = []
result = arr.reduce((pre,cur,index)=>{
    if(pre.length === 0 || pre[pre.length -1] !== cur){
        pre.push(cur)
    }
    return pre
},[])
// console.log(result)
