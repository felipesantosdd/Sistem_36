import { ButtonText, Title } from "../../styles/fonts"
import { Button } from "../buttons/style"
import { HeaderContainer, Logo, TopContainer } from "./style"
import { Link } from "react-router-dom"
export function Header() {

    return (
        <HeaderContainer>
            <TopContainer><Logo /><Title>A.D.A.</Title></TopContainer>
            <TopContainer>
                <Link to="/products"><Button><ButtonText>Produtos</ButtonText></Button></Link>
                <Link to="/clientes"><Button><ButtonText>Clientes</ButtonText></Button></Link>
                <Link to="/users"><Button><ButtonText>Usuarios</ButtonText></Button></Link>
                <Link to="/dasboard"><Button><ButtonText>Dashboard</ButtonText></Button></Link>
            </TopContainer>
        </HeaderContainer>
    )
}