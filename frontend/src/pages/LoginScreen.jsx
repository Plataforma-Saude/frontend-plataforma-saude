import EmailInput from "../components/EmailInput/EmailInput";
import PasswordInput from "../components/PasswordInput/PasswordInput";
import ImageComponent from "../components/ImageComponent/ImageComponent";
import Logo from "../assets/icons/logo.svg"

export default function LoginScreen() {
    return(
        <div className="grid grid-cols-4 h-screen">
            <div className="bg-primary col-span-1 h-full">
                <ImageComponent src={Logo} />
            </div>

            <form className="col-span-3 flex items-center justify-center h-full">
                <div>
                    <h1 className="text-primary">Acesse ou crie uma conta</h1>
                    <div className="border w-4xl">
                        <EmailInput label={"Email"} placeholder={"Digite seu email"} />
                        <PasswordInput label={"Senha"} placeholder={"Digite sua senha"} />
                        <button>Entrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}