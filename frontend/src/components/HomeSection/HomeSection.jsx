import Register from "../Buttons/Register";
import Login from "../Buttons/Login";
import Navbar from "../Navbar/Navbar";

export default function HomeSection() {
    return (
        <>

            <div className="flex flex-col h-screen">
                <Navbar />

                <div className="flex-1 flex flex-row items-center px-20">

                    <div className="flex flex-col text-primary font-inter w-3xl gap-8 tracking-tight">
                        <h1 className="text-6xl font-semibold">Consulta marcada em menos de 1 minuto</h1>
                        <p className="text-3xl">Especialistas de confiança a poucos cliques
                            de você. Simples, rápido e sem
                            complicações.</p>

                        <div className=" text-primary text-1xl flex gap-5">
                            <Register>Cadastrar</Register>
                            <Login>Entrar</Login>
                        </div>
                    </div>
                    {/* <img src="/images/backgroundImage.png" alt="Descrição da imagem" /> */}
                </div>

            </div >
        </>
    )
}