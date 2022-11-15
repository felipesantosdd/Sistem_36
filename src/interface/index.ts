import { ReactNode } from "react";

export interface IContextProps {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    products: {
        code: number;
        img: string;
        valor: number;
        type: string;
        availability: never[];
    }[]
}

export interface IProviderType {
    children: ReactNode;
}

export interface IErrors {
    response: {
        data: string;
        status: number;
        statusText: string;
    }
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string; 
    user: IUser;
}

export interface IUser {
    
        admin: boolean;
        email: string;
        name: string;
        historical: [];
}

export interface IProduct {
    code:number;
    img:string;
    valor:number;
    type:string;
    availability: [];
}
