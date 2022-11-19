import { useContext, useEffect } from "react";
import { Card } from "../../components/card";
import { Header } from "../../components/header";
import { Context } from "../../context";
import { AllCards } from "./style";
export function ProductsPage() {

    const { products, getProducts } = useContext(Context)

    useEffect(() => {
        getProducts()

    }, [getProducts, products])

    return (
        <>
            <Header></Header>
            <AllCards>

                {products?.map((ele) =>
                    <Card
                        key={ele.code}
                        valor={ele.valor}
                        code={ele.code}
                        img={ele.img}
                        color={ele.color}
                        type={ele.type}
                        availability={ele.availability}
                    />)}
            </AllCards>
        </>
    )
}