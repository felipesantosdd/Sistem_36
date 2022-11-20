import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IClients, IContextProps, IErrors, ILoginData, IProduct, IProviderType, IUser } from "../interface";
import { GetClientsService } from "../services/clients";
import { LoginService } from "../services/login";
import { ProduuctsService } from "../services/products";


export const Context = createContext<IContextProps>({} as IContextProps)



export function Provider({ children }: IProviderType) {
    const [user, setUser] = useState<IUser>({} as IUser)

    const [products, serProducts] = useState<IProduct[]>([])

    const [clients, setClients] = useState<IClients[]>([])

    const navigateTo = useNavigate()

    async function login(data: ILoginData) {
        try {
            const Response = await LoginService(data)
            setUser(Response.user);
            localStorage.setItem("authTokken", Response.accessToken)
            navigateTo("/products")


        } catch (error) {
            const Errors = error as AxiosError<IErrors>
            console.log(Errors);
        }
    }

    async function getProducts() {
        try {

            const Response = await ProduuctsService()
            serProducts(Response.data)

        } catch (error) {

        }
    }

    async function getClients() {
        try {
            const Response: IClients[] = await GetClientsService()
            setClients(Response)
        } catch (error) {
            const Errors = error as AxiosError<IErrors>
            console.log(Errors);
        }
    }

    return (
        <Context.Provider value={{
            user,
            setUser,
            products,
            login,
            navigateTo,
            getProducts,
            serProducts,
            clients,
            setClients,
            getClients
        }}>{children}</Context.Provider>
    )
}
