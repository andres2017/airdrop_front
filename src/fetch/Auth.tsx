interface LoginData{
    email: string;
    password: string;
}

interface RegisterData {
    username: string,
    email: string,
    password: string,
    name: string,
    lastname: string,
    phone: string
}

interface LoginResponse{
    status: number,
    message: string,
    user?: Record<string, unknown>,
    token?: string
}

export const Login = async (data: LoginData) : Promise<LoginResponse | null> => {
    try{
        const response = await fetch('http://localhost:5001/api/auth/login', {
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
        const response = await fetch('http://localhost:5001/api/user', {
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