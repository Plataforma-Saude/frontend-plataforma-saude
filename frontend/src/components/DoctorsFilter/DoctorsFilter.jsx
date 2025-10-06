import { FaStethoscope, FaUserMd, FaIdCard, FaSearch } from 'react-icons/fa';

export default function DoctorsFilter() {
    const inputContainerStyle = "relative flex items-center";
    
    const inputStyle = "w-full p-3 pl-10 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-primary transition-colors";

    const iconStyle = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

    return(
        <section className="bg-accent p-6 rounded-xl">
            <h2 className="text-xl font-bold text-primary-dark mb-5">Busque por um especialista</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                {/* Filtro de Especialidade */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="specialty" className="font-semibold text-sm text-gray-700">Especialidade</label>
                    <div className={inputContainerStyle}>
                        <FaStethoscope className={iconStyle} />
                        <select name="specialty" id="specialty" className={inputStyle}>
                            <option value="">Todas</option>
                            <option value="Cardiologia">Cardiologia</option>
                            <option value="Dermatologia">Dermatologia</option>
                        </select>
                    </div>
                </div>

                {/* Filtro de Nome */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="doctorName" className="font-semibold text-sm text-gray-700">Nome do médico</label>
                    <div className={inputContainerStyle}>
                        <FaUserMd className={iconStyle} />
                        <input type="text" id="doctorName" name="doctorName" className={inputStyle} placeholder="Digite o nome" />
                    </div>
                </div>

                {/* Filtro de CRM */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="crm" className="font-semibold text-sm text-gray-700">CRM</label>
                    <div className={inputContainerStyle}>
                        <FaIdCard className={iconStyle} />
                        <input type="text" id="crm" name="crm" className={inputStyle} placeholder="Digite o CRM"/>
                    </div>
                </div>

                {/* Botão de Busca */}
                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300 h-[50px]">
                    <FaSearch />
                    Buscar
                </button>
            </div>
        </section>
    )
}