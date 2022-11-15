import { useContext } from "react";
import { Card } from "../../components/card";
import { Header } from "../../components/header";
import { Context } from "../../context";
import { AllCards } from "./style";
export function DasboardPage() {

    const { products } = useContext(Context)

    console.log(products)
    return (
        <>
            <Header></Header>
            <AllCards>
                 <Card></Card>
                 <Card></Card>
                 <Card></Card>
                 <Card></Card>
                 <Card></Card>
                 <Card></Card>
            </AllCards>
        </>
    )
}