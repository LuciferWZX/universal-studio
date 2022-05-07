export const getType=(a:any):string=>{
    // const typeArray=[
    //     "[object Number]",
    //     "[object String]",
    //     "[object Boolean]",
    //     "[object Undefined]",
    //     "[object Null]",
    //     "[object Symbol]",
    //     "[object Function]",
    //     "[object Array]",
    //     "[object Object]",
    // ]
    if(Object.prototype.toString.call(a).includes("[object ")){
        return Object.prototype.toString.call(a).slice(7, 13)
    }
    return "unknow type"
}