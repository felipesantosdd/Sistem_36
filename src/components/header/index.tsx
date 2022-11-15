import { ButtonText, Title } from "../../styles/fonts"
import { Button } from "../buttons/style"
import { HeaderContainer, Logo, TopContainer } from "./style"
export function Header(){

    return (
        <HeaderContainer>
            <TopContainer><Logo/><Title>A.D.A.</Title></TopContainer>
            <TopContainer>
                <Button><ButtonText>Produtos</ButtonText></Button>
                <Button><ButtonText>Clientes</ButtonText></Button>
                <Button><ButtonText>Usuarios</ButtonText></Button>
                <Button><ButtonText>Dashboard</ButtonText></Button>
            </TopContainer>
        </HeaderContainer> 
    )
}