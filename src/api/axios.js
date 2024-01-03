import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:3000'})



export const getUser = ()=>{

    let res = API.get('/getUsers')
    return res;
}

export const enterUser = (req)=>{
    let res = API.post('/enter/',req)
    return res;
}