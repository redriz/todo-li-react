import { ChevronRightIcon, Trash } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow mb-4">
      <h2 className="text-slate-700 font-bold text-xl">Tarefas</h2>
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left font-medium w-full text-white p-2 rounded-md hover:bg-slate-500 ${
              task.isCompleted && "bg-slate-300 text-slate-500 line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md hover:bg-slate-500">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md hover:bg-slate-500"
          >
            <Trash className="h-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
