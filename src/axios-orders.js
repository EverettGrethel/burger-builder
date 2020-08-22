import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://burger-builder-24674.firebaseio.com/'
});

export default instance;