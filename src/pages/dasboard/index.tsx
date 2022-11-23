
import { Header } from "../../components/header";
import { ModalContainer } from "../../components/modal/style";

export function DashboardPages() {

    return (

        <>
            <Header></Header>
            <ModalContainer>
                <h2>Modal</h2>
                <input type="text" placeholder="Peimrio Input" />
                <input type="text" placeholder="Segundo Input" />
                <button type="submit">Enviar</button>
            </ModalContainer>
        </>

    )
}