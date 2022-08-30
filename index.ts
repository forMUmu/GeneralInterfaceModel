import ordinary from './ordinary'
class Allmodel {
  Api:Object;
  Storage:Object;
  constructor(option:Object,axios?:Object){
    const Ordinary=new ordinary(option,axios)
    this.Api=Ordinary.Api
    this.Storage=Ordinary.Storage

    
  }
}
// import config from '../config/urlList'
// import axios from './axios'

export default Allmodel