//restful风格接口样式开发
import Axios from './axios'
class BaseInterface {
  protected url:String;
  protected axios:Axios ;
  //穿参数构建接
  constructor(url:string,axios?:Object){
    this.url=url
    this.axios=axios
   
  }
  //添加
  protected addItem(data:object){
    return new Promise((resolve,reject)=>{
      this.axios({method:'post',url:this.url,data:data}).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }
  protected addList(data:object){
    return new Promise((resolve,reject)=>{
      this.axios({method:'post',url:this.url,data:data}).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }

  //删除
  protected delItem(data:object){
    return new Promise((resolve,reject)=>{
      this.axios({method:'delete',url:this.url,data:data}).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }
  protected delList(data:object){
    return new Promise((resolve,reject)=>{
      this.axios({method:'delete',url:this.url,data:data}).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }

  //查询
  protected getItem(data:object){
    return new Promise((resolve,reject)=>{
      this.axios({method:'get',url:this.url,params:data}).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })

  }
  protected getList(data:object){
    return new Promise((resolve,reject)=>{
      this.axios({method:'get',url:this.url,params:data}).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }

  protected updateItem(data){
    return new Promise((resolve,reject)=>{
      this.axios({method:'put',url:this.url,data:data}).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }
}
export default BaseInterface;