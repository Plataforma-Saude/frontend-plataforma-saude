export default function Header() {
    return(
        <header className="flex justify-between py-6">
            <div className="flex gap-4">
                <figure>
                    <img src="" alt="Logo da clínica" />
                </figure>
                <h2>NOME DA CLÍNICA</h2>
            </div>
            
            <div className="flex gap-4">
                <p>Bem vindo, <span>USER</span></p>
                <figure>
                    <img src="" alt="Foto do usuário" />
                </figure>
            </div>
        </header>
    )
}