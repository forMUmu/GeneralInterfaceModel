import BaseInterface from './baseInterface';
/**
 * 根据url list 定义并且构建通用类型 无需手动挨个构建
 * 自动化构建所有url接口的增删改查 
 */
class ordinary  {
  Api:Object=new Object();
  Storage:Object=new Object();
  constructor(option:Object,axios?:Object) {
    const urls=option['urls']
    Object.keys(urls).forEach(outer=>{
      var obj=new Object()
      Object.keys(urls[outer]).forEach(inner=>{
        obj[inner]= new BaseInterface(urls[outer][inner],axios)
      })
     this.Api[outer]=obj
    })
    this.Storage=option['storage']
  }
}
export default ordinary