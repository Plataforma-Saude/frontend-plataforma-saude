export default function DoctorsFilter() {
    return(
        <>
            <div className="flex items-center justify-center border">
                <div className="border border-amber-700 w-3/5">
                    <div>
                        <h2>Busca e filtros</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col gap-3 py-4">
                            <label htmlFor="specialty">Selecione a especialidade</label>
                            <select name="specialty" id="specialty">
                                <option value="Teste">Teste</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3 py-4">
                            <label htmlFor="doctorName">Nome do médico</label>
                            <input type="text" id="doctorName" name="doctorName" />
                        </div>
                        <div className="flex flex-col gap-3 py-4">
                            <label htmlFor="crm">CRM</label>
                            <input type="text" id="crm" name="crm" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}