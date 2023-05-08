import axios from 'axios';


export const addUser = async (data) => {
    try{
        return await axios.post('http://localhost:3002/users',data);
    }catch(error){
        console.log(error);
    }
}

export const getAllUsers = async () => {
    try{
        return await axios.get('http://localhost:3002/users');
    }catch(error){
        console.log(error);
    }   
}

export const getUser = async (id) => {
    try{
        return await axios.get(`http://localhost:3002/users/${id}`);
    }catch(error){
        console.log(error);
    }
}
export const updateUser = async (id,data) => {
    try{
        return await axios.put(`http://localhost:3002/users/${id}`,data);
    }catch(error){
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`http://localhost:3002/users/${id}`);
    }catch(error){
        console.log(error);
    }   
}

