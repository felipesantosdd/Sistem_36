import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import { string } from "yup";

export interface IContextProps {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    products: IProduct[];
    serProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    login(data: ILoginData): Promise<void>;
    navigateTo: NavigateFunction;
    getProducts(): Promise<void>;
    clients: IClients[];
    setClients: React.Dispatch<React.SetStateAction<IClients[]>>
    getClients(): Promise<void>
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
    code: number;
    img: string;
    valor: number;
    type: string;
    color: string;
    availability: [];
}

export interface IClients {
    name: string;
    cpf: number;
    whatzap: number;
    address: {
        City: string;
        district: string;
        road: string;
        number: number;
    };
    contracts: []
}

export const imgProps = {
    img: string
}