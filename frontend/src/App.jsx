import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import SelectDoctor from "./pages/SelectDoctor";
import Layout from "./components/Layout/Layout";

export default function App() {
    return (
        <Router>
            <Routes>
                {/* Rotas que não usam o Layout ficam aqui fora */}
                <Route path="/login" element={<LoginScreen />} />

                {/* Rota "pai" que renderiza o Layout. Todas as rotas filhas
                    serão renderizadas dentro do <Outlet /> do Layout */}
                <Route element={<Layout />}>
                    <Route path="/buscar-medico" element={<SelectDoctor />} />
                    {/* Exemplo: Se tivesse outra página, ela viria aqui */}
                    {/* <Route path="/meu-perfil" element={<ProfileScreen />} /> */}
                </Route>

                {/* Redirecionamento padrão para qualquer rota não encontrada */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
}
