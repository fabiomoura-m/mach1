import './style.css';

export default function FormPreRegister() {
    const enviarDados = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        let mensagem = '';
        const arrValores = ['categoria', 'email', 'sexo', 'termos'];

        arrValores.forEach(key => {
            const value = form.get(key);

            if (!value) {
                mensagem += `${key}, `;
            }
        });

        if (mensagem !== '') {
            alert(`Os seguintes campos: ${mensagem} não estão preenchidos`);
        } else {
            for (const key of form.keys()) {
                console.log('campo:', key, 'valor:', form.get(key));
            }
        }
    };
    return (
        <div className="container">
            <h2 className="title">PRÉ CADASTRO</h2>
            <form action="" onSubmit={enviarDados}>
                <div className="container-category">
                    <span>Categoria</span>
                    <div className="fields-category">
                        <div>
                            <input
                                type="radio"
                                name="categoria"
                                id="aluno"
                                value="aluno"
                            />
                            <label htmlFor="aluno">aluno</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="categoria"
                                id="professor"
                                value="professor"
                            />
                            <label htmlFor="professor">professor</label>
                        </div>
                    </div>
                </div>
                <div className="container-email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="adicione seu email"
                    />
                </div>
                <div className="container-sexo">
                    <label htmlFor="sexo">Sexo</label>
                    <select name="sexo" id="sexo">
                        <option defaultValue="masculino">Masculino</option>
                        <option defaultValue="feminino">Feminino</option>
                    </select>
                </div>
                <div className="container-termos">
                    <input
                        type="checkbox"
                        name="termos"
                        id="termos"
                        defaultValue={true}
                    />
                    <label htmlFor="termos">aceito os termos de uso</label>
                </div>
                <div className="container-button">
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
    );
}
