
import {LoginData, RegisterData, LoginResponse, ForgotPasswordData} from '../interfaces/Auth.interface';
const urlBase = import.meta.env.VITE_API_URL

export const Login = async (data: LoginData) : Promise<LoginResponse | null> => {
    try{
        const response = await fetch(`${urlBase}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData:  LoginResponse = await response.json()
        return responseData;
    }catch (error){
        console.error('Error login', error);
        return null;
    }
   
}

export const Register = async (data: RegisterData) : Promise<LoginResponse | null> => {
    try{
        const response = await fetch(`${urlBase}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData:  LoginResponse = await response.json();
        console.log(responseData)
        return responseData;
    }catch (error){
        console.error('Error login', error);
        return null;
    }
   
}

export const ForgotPassword = async (data: ForgotPasswordData) : Promise<LoginResponse | null> => {
    const dato = {
        password: data.password
    }
    try{
        const response = await fetch(`${urlBase}/user/forgot/${data.email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dato),
        });
        const responseData:  LoginResponse = await response.json();
        console.log(responseData)
        return responseData;
    }catch (error){
        console.error('Error login', error);
        return null;
    }
   
}