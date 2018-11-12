import '../styles/main.less'
import { resolve } from 'upath';

class opsUtils {
    constructor(){
        this.arr = [2,5,6,1]
        this.init()
    }
    init(){
        this.arr.map(item=>{
            console.log(`opsUtils${item}`)
        })
        return new Promise(resolve=>{
            resolve()
        })

    }
}

export default opsUtils
