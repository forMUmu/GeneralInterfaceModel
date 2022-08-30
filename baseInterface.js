class BaseInterface {
    constructor(url, axios) {
        this.url = url;
        this.axios = axios;
    }
    addItem(data) {
        return new Promise((resolve, reject) => {
            this.axios({ method: 'post', url: this.url, data: data }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    addList(data) {
        return new Promise((resolve, reject) => {
            this.axios({ method: 'post', url: this.url, data: data }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    delItem(data) {
        return new Promise((resolve, reject) => {
            this.axios({ method: 'delete', url: this.url, data: data }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    delList(data) {
        return new Promise((resolve, reject) => {
            this.axios({ method: 'delete', url: this.url, data: data }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    getItem(data) {
        return new Promise((resolve, reject) => {
            this.axios({ method: 'get', url: this.url, params: data }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    getList(data) {
        return new Promise((resolve, reject) => {
            this.axios({ method: 'get', url: this.url, params: data }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    updateItem(data) {
        return new Promise((resolve, reject) => {
            this.axios({ method: 'put', url: this.url, data: data }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
export default BaseInterface;
