import { Routes , Route , Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Todos } from "../pages/Todos";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/"  element={ <Home/> } />
            <Route path="/todos" element={ <Todos /> } />
            <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}