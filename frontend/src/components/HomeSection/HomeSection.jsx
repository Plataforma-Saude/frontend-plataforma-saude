import Register from "../Buttons/Register";
import Login from "../Buttons/Login";
import Navbar from "../Navbar/Navbar";

export default function HomeSection() {
    return (
        <>
            {/* Este container principal fará com que o Navbar e o conteúdo fiquem em coluna e ocupem toda a tela */}
            <div className="flex flex-col h-screen">
                <Navbar />

                {/* Esta div agora irá ocupar todo o espaço restante abaixo do Navbar */}
                <div className="flex-1 flex flex-row items-center px-20">

                    <div className="flex flex-col text-primary font-inter w-3xl gap-6">
                        <h1 className="text-6xl font-semibold">Consulta marcada em menos de 1 minuto</h1>
                        <p className="text-3xl">Especialistas de confiança a poucos cliques
                            de você. Simples, rápido e sem
                            complicações.</p>
                        <div className=" text-primary text-1xl flex gap-5">
                            <Register>Cadastrar</Register>
                            <Login>Entrar</Login>
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}