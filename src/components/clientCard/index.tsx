import { IClients } from "../../interface";
import { CardTitle } from "../../styles/fonts";
import { ClientContainer, NameContainer, WhatsContainer } from "./style";

export function ClientCard({ id, name, cpf, whatzap, address, contracts }: IClients) {

    return (
        <ClientContainer>
            <NameContainer><CardTitle>{`Nome: ${name}`}</CardTitle></NameContainer>
            <WhatsContainer>
                <CardTitle>{`Whatzapp: ${whatzap}`}</CardTitle>
            </WhatsContainer>

        </ClientContainer>

    )
}