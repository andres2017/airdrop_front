interface LoginData{
    email: string;
    password: string;
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