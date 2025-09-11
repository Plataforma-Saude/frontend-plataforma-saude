import LoginScreen from "./pages/LoginScreen";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SelectDoctor from "./pages/SelectDoctor";

export default function App() {
    return (
        <Router>
            <Routes>
                {/* Redireciona para /login caso a rota não seja reconhecida */}
                <Route path="*" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/buscar-medico" element={<SelectDoctor />} />
            </Routes>
        </Router>
    );
}