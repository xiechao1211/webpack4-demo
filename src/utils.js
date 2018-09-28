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
