import { ILoginData, ILoginResponse } from "../../interface";
import { Api } from "../baseUrl";

export function LoginService(data: ILoginData){

    const Response = Api.post<ILoginResponse>('/login', data)
    .then(response => response.data)
    return Response

}