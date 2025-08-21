import Register from "../Buttons/Register";
import Login from "../Buttons/Login";


export default function Navbar() {
    return (
        <>
            <nav className="w-full h-24 p-20 flex justify-between items-center bg-white font-inter shadow-sm">
                <div className="flex items-center gap-3">
                    <img className="w-22" src="../src/assets/icons/logo.svg" alt="logo" />
                    <h1 className="text-3xl"><b>HEALTH</b><br />CARE</h1>
                </div>
                <ul className="text-primary text-2xl flex gap-10">
                    <li><a href="/">Para pacientes</a></li>
                    <li><a href="/">Para médicos</a></li>
                    <li><a href="/">Para empresas</a></li>
                </ul>
                <div className="text-primary text-1xl flex gap-5">
                    <Register>Cadastrar</Register>
                    <Login>Entrar</Login>
                </div>
            </nav >
        </>
    )
}