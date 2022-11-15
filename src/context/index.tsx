import { createContext, useState } from "react";
import { IContextProps, IProviderType, IUser } from "../interface";


export const Context = createContext<IContextProps>({} as IContextProps)



export function Provider({ children }:IProviderType){
    const [user, setUser] = useState<IUser>({} as IUser)
    const products = [
        {
            code: 100,
            img: 'https://drive.google.com/file/d/13ypbPYfYm-r-o2NwfHUfcUF55d-ha76Y/view?usp=share_link',
            valor: 300,
            type: 'Armor',
            availability: []
        },
        {
            code: 300,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Fox2pzGw37Yteg5VWvgl4VlUUkFSdxrCksITBMvS8Q&s',
            valor: 100,
            type: 'Armor',
            availability: []
        },
         {
            code: 100,
            img: 'https://drive.google.com/file/d/13ypbPYfYm-r-o2NwfHUfcUF55d-ha76Y/view?usp=share_link',
            valor: 300,
            type: 'Armor',
            availability: []
        },
        {
            code: 300,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Fox2pzGw37Yteg5VWvgl4VlUUkFSdxrCksITBMvS8Q&s',
            valor: 100,
            type: 'Armor',
            availability: []
        },
        {
            code: 100,
            img: 'https://drive.google.com/file/d/13ypbPYfYm-r-o2NwfHUfcUF55d-ha76Y/view?usp=share_link',
            valor: 300,
            type: 'Armor',
            availability: []
        },
        {
            code: 300,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Fox2pzGw37Yteg5VWvgl4VlUUkFSdxrCksITBMvS8Q&s',
            valor: 100,
            type: 'Armor',
            availability: []
        },
    ]

    return (
        <Context.Provider value={{
            user,
            setUser,
            products,
        }}>{children}</Context.Provider>
    )
}
