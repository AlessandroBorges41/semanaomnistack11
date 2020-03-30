import axios from 'axios';

//Porta do Backend ou Node
const api = axios.create({
    baseURL: 'http://192.168.0.97:3333' 
})

export default api;

