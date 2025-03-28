import { ChevronLeftIcon, Instagram, Github } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 p-6 justify-center flex">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute left-0 top-0 bottom-0 bg-slate-600 p-1 rounded-md text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="p-6 bg-slate-200 rounded-md shadow">
          <h2 className="text-slate-700 font-bold text-xl">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
        <footer className="flex justify-between items-center text-slate-300 font-medium text-sm">
          <p>&copy;2025 Adonai Rodriguez</p>
          <ul className="flex space-x-1">
            <li className="hover:text-slate-600">
              <a href="https://github.com/redriz" target="_blank">
                <Github className="h-5" />
              </a>
            </li>
            <li className="hover:text-slate-600">
              <a href="https://www.instagram.com/redrizito/" target="_blank">
                <Instagram className="h-5" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default TaskPage;
