import ordinary from './ordinary';
class Allmodel {
    constructor(option, axios) {
        const Ordinary = new ordinary(option, axios);
        this.Api = Ordinary.Api;
        this.Storage = Ordinary.Storage;
    }
}
export default Allmodel;
