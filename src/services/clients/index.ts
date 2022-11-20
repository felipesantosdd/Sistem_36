import { Api } from "../baseUrl";

export function GetClientsService() {
    const Response = Api.get('/clients', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("authTokken")}`
        }
    }).then((response) => response.data)

    return Response;

}