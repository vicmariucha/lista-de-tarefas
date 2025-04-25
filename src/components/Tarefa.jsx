
function Tarefa({ tarefa, alternarConclusao, removerTarefa}) {
    return(
        <li className={tarefa.concluida ? "concluida" : ""}>
            <span onClick={() => alternarConclusao(tarefa.id)}>{tarefa.titulo}</span>
            <button onClick={() => removerTarefa(tarefa.id)} className="btn-remove">Remover</button>
        </li>
    );
}

export default Tarefa;