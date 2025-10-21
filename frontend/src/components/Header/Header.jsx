import { FaChevronDown } from 'react-icons/fa'; // Importe um ícone de sua preferência

export default function Header() {
    return(
        <header className="flex justify-between items-center py-3 px-6 bg-white border-b border-gray-200">
            {/* Logo e Nome da Clínica */}
            <div className="flex items-center gap-4">
                <figure className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    {/* SVG da logo aqui */}
                    <span className="text-white font-bold text-xl">C</span> 
                </figure>
                <h1 className="hidden sm:block text-xl font-bold text-primary">NOME DA CLÍNICA</h1>
            </div>

            {/* Menu */}
            <nav className="justify-start">
                <ul className="flex gap-6 text-primary justify-start">
                    <li><a href="/" className="hover:underline">Início</a></li>
                    <li><a href="/buscar-medico" className="hover:underline">Agendar</a></li>
                    <li><a href="/minhas-consultas" className="hover:underline">Minhas consultas</a></li>
                </ul>
            </nav>
            
            {/* Menu do Usuário */}
            <div className="flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-colors hover:bg-accent">
                <div className="text-right hidden md:block">
                    <p className="text-sm font-semibold text-gray-800">USER</p>
                    <p className="text-xs text-gray-500">Bem vindo</p>
                </div>
                <img 
                  src="https://via.placeholder.com/40"
                  alt="Foto do usuário" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary/50"
                />
                <FaChevronDown className="text-gray-400" />
            </div>
        </header>
    )
}