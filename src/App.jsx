import { useState } from "react";
import "./App.css";
import InputTarefa from "./components/InputTarefa";
import ListaTarefas from "./components/ListaTarefas";

function App(){
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    const nova = {
      id: Date.now(),
      titulo: novaTarefa,
      concluida: false,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  };
  
  const alternarConclusao = (id) => {
    setTarefas(
      tarefas?.map((tarefas) => 
        tarefas.id === id ? {...tarefas, concluida: !tarefas.concluida} : tarefas
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return(
    <div className="app">
      <h1>Lista de tarefas</h1>
      <InputTarefa
        novaTarefa={novaTarefa}
        setNovaTarefa={setNovaTarefa}
        adicionarTarefa={adicionarTarefa}
      />
      <ListaTarefas
        tarefas={tarefas}
        alternarConclusao={alternarConclusao}
        removerTarefa={removerTarefa}
      />
    </div>
  );
}

export default App;