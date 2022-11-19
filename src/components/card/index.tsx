import { IProduct } from "../../interface";
import { CardDescription, CardTitle } from "../../styles/fonts";
import { CardBox, CardContainer, CardImg } from "./style";

export function Card({ code, img, valor, type, color, availability }: IProduct) {

    return (
        <CardContainer>
            <CardBox>
                <CardImg src={img} />
            </CardBox>
            <CardTitle>{type}</CardTitle>
            <CardDescription>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</CardDescription>
        </CardContainer>
    )
}