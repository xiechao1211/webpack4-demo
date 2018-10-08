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

