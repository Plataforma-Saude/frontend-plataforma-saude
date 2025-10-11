import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import EmailInput from "../../components/EmailInput/EmailInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import Logo from "../../assets/icons/logo.svg";
import HomeDoctors from "../../assets/img/home-doctors.svg";
import { loginValidationSchema } from "../../utils/loginValidation";
import { Link } from "react-router-dom";
 
export default function LoginScreen() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginValidationSchema)
    })

    const navigate = useNavigate();

    const onLogin = (data) => {
        console.log(data)
        navigate('/buscar-medico');
    };

  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="bg-primary col-span-1 h-full">
        <div className="grid grid-cols-1 h-full">
          <div className="flex justify-center items-center">
            <ImageComponent src={Logo} alt={"Logo"} className={"w-30"} />
          </div>

                    <div className="flex justify-center items-center">
                        <h2 className="text-white text-5xl font-semibold">Agende. Gerencie. Cuide.</h2>
                    </div>

                    <div className="flex justify-center items-end">
                        <ImageComponent src={HomeDoctors} alt={"Ilustração de doutores"} className={"w-100 -mb-20"} />
                    </div>

                </div>
            </div>

            <form
                onSubmit={handleSubmit(onLogin)}
                className="col-span-3 flex items-center justify-center"
            >
                <div className="flex flex-col w-xl h-80 justify-between">
                    <h2 className="text-primary text-center text-5xl font-bold">Acesse ou crie uma conta</h2>

                    <EmailInput
                        placeholder={"email@exemplo.com"}
                        name={'email'}
                        inputClassName={"w-full h-15 border border-primary border-3 rounded-lg px-5 text-lg outline-none"}
                        register={register}
                        errors={errors}
                        errorClassName={"text-red-400"}
                    />

                    <PasswordInput
                        placeholder={"Senha"}
                        name={'password'}
                        inputClassName={"w-full h-15 border border-primary border-3 rounded-lg px-5 text-lg outline-none"}
                        register={register}
                        errors={errors}
                        errorClassName={"text-red-400"}
                    />

                    <div className="flex justify-around items-center">
                        <button
                            className="border border-primary w-50 bg-primary text-white text-lg font-semibold h-10 rounded-lg cursor-pointer hover:bg-[#4f9e8a] transition-all">Entrar</button>
                        
                        <Link
                            to="/register"
                            className="border border-primary text-lg px-4 rounded-lg">
                            Criar conta
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <a href="" className="text-lg px-4">Esqueci minha senha</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
