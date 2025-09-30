import { createContext, useState, useContext, useEffect } from 'react';
import api from '../api/axiosConfig';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Estado de loading para verificação inicial

    // Efeito para verificar se já existe uma sessão ativa no backend
    useEffect(() => {
        const verifyUserSession = async () => {
            try {
                // O navegador enviará o cookie HttpOnly automaticamente

                // TODO: colocar uma URL válida
                const response = await api.get('/user/me'); // Um endpoint que retorna os dados do usuário logado
                setUser(response.data);
            } catch (error) {
                // Se der erro (401, 403), significa que não há sessão válida
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        verifyUserSession();
    }, []);

    const login = async (credentials) => {
        // A API de login agora retorna os dados do usuário, não o token
        const response = await api.post('/auth/login', credentials);
        setUser(response.data); // Armazena os dados do usuário (ex: { id, name, role })
    };

    const logout = async () => {
        await api.post('/auth/logout'); // A API de logout limpa o cookie
        setUser(null); // Limpa o estado local
    };

    const value = { user, login, logout, loading };

    // Não renderiza a app enquanto não souber se o usuário está logado ou não
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};