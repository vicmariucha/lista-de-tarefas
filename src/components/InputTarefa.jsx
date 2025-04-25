
function InputTarefa({ novaTarefa, setNovaTarefa, adicionarTarefa}){
    return(
        <div className="input-container">
            <input type="text" placeholder="Digite uma tarefa" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)}></input>
            <button onClick={adicionarTarefa} className="btn-add">Adicionar</button>
        </div>
    );
}

export default InputTarefa;