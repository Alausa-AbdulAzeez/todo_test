import React from "react";
import { toast } from "react-toastify";

const DeleteTaskModalComponent = ({
  handleClose,
  categoryData,
  setTodoData,
  todoData,
  taskToBeEdited,
}) => {
  //   FUNCTION TO HAANDLE TASK DELETE
  const handleDeleteTask = () => {
    const taskId = taskToBeEdited?.id;

    // REMOVE THE TASK WITH THE GIVEN ID FROM THE todoData STATE
    const updatedTodoData = todoData.filter((task) => task.id !== taskId);
    setTodoData(updatedTodoData);

    // TOAST
    toast("Task deleted successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "success",
    });

    // CLOSE MODAL
    handleClose();
  };

  //   END OF FUNCTION TO HAANDLE TASK DELETE
  return (
    <div className="w-[500px] min-h-[200px] max-h-[300px] p-3 rounded-lg bg-white flex flex-col justify-between">
      <div className="text-red-600 h-[45px] font-medium ml-2 text-lwPurple flex justify-start items-center">
        CONFIRM DELETE
      </div>
      <div className=" border-t border-b border-b-silver border-t-silver flex-1 flex flex-wrap gap-3 p-2">
        Are you sure you want to delete this task. This action cannot be
        reversed.
      </div>
      <div className=" h-[60px] flex justify-end">
        <button
          className="py-1 px-4 font-medium text-lwPurple rounded-md hover:bg-slate-50"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className={`py-1 px-4 font-medium text-lwPurple rounded-md hover:bg-slate-50`}
          onClick={handleDeleteTask}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeleteTaskModalComponent;
