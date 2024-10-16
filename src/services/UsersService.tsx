
import {UsersResponse} from '../interfaces/User.interface'
const urlBase = import.meta.env.VITE_API_URL

export const getAllUsers = async (token:string) : Promise<UsersResponse | null> => {
    try{
        console.log('paso por el servcio');
        const response = await fetch(`${urlBase}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const responseData:  UsersResponse = await response.json()
        return responseData;
    }catch (error){
        console.error('Error login', error);
        return null;
    }
   
}