import { Routes, Route } from "react-router-dom"
import { DasboardPage } from "../pages/dasboard"
import { LoginPage } from "../pages/login"

export function MainRoutes(){

    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<DasboardPage/>}/>
        </Routes>
    )
}