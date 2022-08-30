import BaseInterface from './baseInterface';
class ordinary {
    constructor(option, axios) {
        this.Api = new Object();
        this.Storage = new Object();
        const urls = option['urls'];
        Object.keys(urls).forEach(outer => {
            var obj = new Object();
            Object.keys(urls[outer]).forEach(inner => {
                obj[inner] = new BaseInterface(urls[outer][inner], axios);
            });
            this.Api[outer] = obj;
        });
        this.Storage = option['storage'];
    }
}
export default ordinary;
