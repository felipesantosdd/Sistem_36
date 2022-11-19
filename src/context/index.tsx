import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IContextProps, IErrors, ILoginData, IProduct, IProviderType, IUser } from "../interface";
import { LoginService } from "../services/login";
import { ProduuctsService } from "../services/products";


export const Context = createContext<IContextProps>({} as IContextProps)



export function Provider({ children }: IProviderType) {
    const [user, setUser] = useState<IUser>({} as IUser)

    const [products, serProducts] = useState<IProduct[]>([])

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

    return (
        <Context.Provider value={{
            user,
            setUser,
            products,
            login,
            navigateTo,
            getProducts,
            serProducts
        }}>{children}</Context.Provider>
    )
}
