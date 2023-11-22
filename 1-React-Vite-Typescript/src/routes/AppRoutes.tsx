import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Administracion from "../pages/Administracion"

import Factura from "../pages/Factura"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Componentes" element={<Componentes/>}/>
        <Route path="/Administracion" element={<Administracion/>}/>
        <Route path="/Factura" element={<Factura/>}/>
    </Routes>
  )
}

export default AppRoutes