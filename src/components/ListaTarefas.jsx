import Tarefa from "./Tarefa"

function ListaTarefas({ tarefas, alternarConclusao, removerTarefa}) {
    return(
        <ul className="lista">
            {tarefas.map((tarefa) => (
                <Tarefa 
                    key={tarefa.id}
                    tarefa={tarefa}
                    alternarConclusao={alternarConclusao}
                    removerTarefa={removerTarefa}
                ></Tarefa>
            ))}
        </ul>
    );
}

export default ListaTarefas;