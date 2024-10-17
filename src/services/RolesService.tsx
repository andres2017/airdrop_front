
import {RoleResponse} from '../interfaces/Role.interface'
const urlBase = import.meta.env.VITE_API_URL

export const getAllRole = async (token:string) : Promise<RoleResponse | null> => {
    try{
        console.log('paso por el servcio');
        const response = await fetch(`${urlBase}/role`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const responseData:  RoleResponse = await response.json()
        return responseData;
    }catch (error){
        console.error('Error login', error);
        return null;
    }
   
}