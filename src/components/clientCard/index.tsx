import { IClients } from "../../interface";
import { CardTitle } from "../../styles/fonts";
import { ClientContainer, NameContainer, WhatsContainer } from "./style";

export function ClientCard({ name, cpf, whatzap, address, contracts }: IClients) {

    return (
        <ClientContainer>
            <NameContainer><CardTitle>{name}</CardTitle></NameContainer>
            <WhatsContainer>
                <CardTitle>{`Whatzapp: ${whatzap}`}</CardTitle>
            </WhatsContainer>

        </ClientContainer>

    )
}