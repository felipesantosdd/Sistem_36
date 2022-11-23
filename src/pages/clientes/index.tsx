import { useContext, useEffect } from "react";
import { AddButton } from "../../components/buttons/style";
import { ClientCard } from "../../components/clientCard";
import { Header } from "../../components/header";
import { Context } from "../../context";

export function ClientesPage() {

    const { getClients, clients } = useContext(Context)

    useEffect(() => {
        getClients()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(clients);


    return (
        <>
            <Header></Header>
            {clients?.map(client =>
                <ClientCard key={client.cpf} name={client.name} cpf={client.cpf} whatzap={client.whatzap}
                    address={client.address} contracts={client.contracts} />

            )}
            <AddButton />
        </>


    )
}