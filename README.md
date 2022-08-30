# GeneralInterfaceModel



# 开始

git clone https://github.com/forMUmu/GeneralInterfaceModel.git

# 使用 
构建配置对象，对象结构满足，其中list是类对象的list查询使用的接口，origin是类对象自身增删改查的方法

```
export default{
  urls:{
    member:{
      list:'www.baidu.com',
      origin:'www.baidu.com',
         }
     },
   storage:['memberList', 'Token']
}
```

引入`index`文件
import model from xxxx 文件路径 
const allModel =new model（配置对象，二次封装的axios）

此时 allModel就是对配置文件进行解析，并重新构造出的对象，减少代码冗余，增加开发效率 

<img width="425" alt="截屏2022-08-30 下午10 13 13" src="https://user-images.githubusercontent.com/53386011/187460255-ce43ea04-358a-4223-b84b-e213f1ebe53c.png">

restful api接口规范 
每个接口方法接受一个data参数，这个参数是根据业务需求进行传参 

# 意见
该项目可以根据自己业务需求进行改造，例如改写类的方法 
 ```
 import BaseInterface from './baseInterface';
class Member extends BaseInterface {
    constructor(url) {
        super(url);
    }
    
    add(data) {
        return super.addItem(data);
    }
    delete(data) {
        if (data['id']) {
            return super.delItem(data);
        }
        else {
            return super.delList(data);
        }
    }
    get(data) {
        if (data['id']) {
            return super.getItem(data);
        }
        else {
            return super.getList(data);
        }
    }
    update(data) {
        return super.updateItem(data);
    }
}
export default Member;
```
然后在index中引入


 
 
 
