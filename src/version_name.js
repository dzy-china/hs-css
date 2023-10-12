/**
 * 格式化当前日期
 * @returns 
 */
const get_version_name = ()=>{
    const date=new Date()
   return  `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
}
module.exports = {
    get_version_name
}