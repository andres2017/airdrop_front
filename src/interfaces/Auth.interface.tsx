export interface LoginData{
    email: string;
    password: string;
}

export interface RegisterData {
    username: string,
    email: string,
    password: string,
    name: string,
    lastname: string,
    phone: string
}

export interface LoginResponse{
    status: number,
    message: string,
    user?: Record<string, unknown>,
    token?: string
}

export interface ForgotPasswordData {
    email: string;
    password: string;
}

export interface usersResponse{
    status: number,
    message: string,
    user?: Record<string, unknown>,
}