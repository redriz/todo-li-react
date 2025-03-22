function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow mb-4 flex flex-col">
      <h2 className="text-slate-700 font-bold text-xl">Adicionar Tarefa</h2>
      <input
        type="text"
        placeholder="Título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <button className="bg-slate-500 text-center font-medium w-full text-white p-2 rounded-md hover:bg-slate-400 active:bg-slate-600">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
