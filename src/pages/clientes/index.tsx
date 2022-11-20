import { useContext, useEffect } from "react";
import { ClientCard } from "../../components/clientCard";
import { Header } from "../../components/header";
import { Context } from "../../context";
import { Title } from "../../styles/fonts";

export function ClientesPage() {

    const { getClients, clients } = useContext(Context)

    useEffect(() => {
        getClients()
    }, [])

    console.log(clients);


    return (
        <>
            <Header></Header>
            {clients?.map(client =>
                <ClientCard id={client.id} name={client.name} cpf={client.cpf} whatzap={client.whatzap}
                    address={client.address} contracts={client.contracts} />

            )}
        </>


    )
}