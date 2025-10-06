import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import SelectDoctor from "./pages/SelectDoctor";
import Layout from "./components/Layout/Layout";
import ScheduleAppointment from './pages/ScheduleAppointment';
import DashboardScreen from './pages/admin/DashboardScreen';
import MyAppointmentsPage from "./pages/patient/MyAppointmentsPage";
// import ManageUsersScreen from './pages/admin/ManageUsersScreen';
import AdminRoute from './components/Auth/AdminRoute';
import { AuthProvider } from './context/AuthContext';
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import ResetPasswordScreen from "./pages/ResetPasswordScreen";
import RegisterScreen from "./pages/RegisterScreen";

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Rotas que não usam o Layout ficam aqui fora */}
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
                    <Route path="/reset-password" element={<ResetPasswordScreen />} />

                    <Route path="/register" element={<RegisterScreen />} />

                    {/* Rota "pai" que renderiza o Layout. Todas as rotas filhas
                    serão renderizadas dentro do <Outlet /> do Layout */}
                    <Route element={<Layout />}>
                        <Route path="/buscar-medico" element={<SelectDoctor />} />
                        {/* Exemplo: Se tivesse outra página, ela viria aqui */}
                        {/* <Route path="/meu-perfil" element={<ProfileScreen />} /> */}
                        <Route path="/minhas-consultas" element={<MyAppointmentsPage />} />
                        <Route path="/agendar/:doctorId" element={<ScheduleAppointment />} />
                    </Route>

                    <Route element={<AdminRoute />}>
                        {/* Aqui você pode usar o mesmo Layout ou um Layout específico para o Admin */}
                        <Route element={<Layout />}>
                            <Route path="/admin/dashboard" element={<DashboardScreen />} />
                            {/* <Route path="/admin/manage-users" element={<ManageUsersScreen />} /> */}
                        </Route>
                    </Route>

                    {/* Redirecionamento padrão para qualquer rota não encontrada */}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
