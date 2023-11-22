import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Factura from "../pages/Factura"
import ArticuloInsumo from "../pages/ArticuloInsumo"
import Login from "../pages/login/Login"
import * as React from 'react';

const PrivateRoute = React.lazy(() => import('./PrivateRoute'));



const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route element={<Login />} path="/login" />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Componentes" element={<Componentes/>}/>
        <Route element={<PrivateRoute element={<ArticuloInsumo />} />} path="/ArticuloInsumo" />
        <Route path="/Factura" element={<Factura/>}/>
        
    </Routes>
  )
}

export default AppRoutes