import { Routes, Route } from "react-router-dom"
import { ClientesPage } from "../pages/clientes"
import { ProductsPage } from "../pages/products"
import { LoginPage } from "../pages/login"

export function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
        </Routes>
    )
}