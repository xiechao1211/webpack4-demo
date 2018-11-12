import '../styles/main.less'

class opsUtils {
    constructor(){
        this.arr = [2,5,6,1]
        this.init()
    }
    init(){
        this.arr.map(item=>{
            console.log(`opsUtils${item}`)
        })

    }
}

export default opsUtils
