import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // Importante o uso do URLSearchParams para criar a query string, pois no momento que ta sendo criada a Query Params, pode ter caracteres especiais que podem quebrar a URL
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`); // Navega para a página de detalhes da tarefa com a query string
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map(
        (
          task //Importante o uso da key aqui, para o React identificar qual item da lista foi alterado
        ) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {/* {task.isCompleted ? <CheckIcon /> : null} // somente demonstrando outra forma */}
              {task.title}
              {/* {task.isCompleted ? "COMPLETE" : "INCOMPLETE"} */}
            </button>
            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        )
      )}
    </ul>
  );
}

export default Tasks;
