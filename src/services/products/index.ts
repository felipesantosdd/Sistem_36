import { Api } from "../baseUrl";

export function ProduuctsService() {
    const Response = Api.get('/products', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("authTokken")}`
        }
    }).then((response) => response)

    return Response;

}