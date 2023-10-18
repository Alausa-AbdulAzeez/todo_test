import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditTaskModalComponent = ({
  handleClose,
  categoryData,
  setTodoData,
  todoData,
  taskToBeEdited,
}) => {
  console.log(taskToBeEdited);

  //  THE STATE OF THE INPUTS
  const [inputState, setInputState] = useState(false);

  // TASK DATA
  const [taskData, setTaskData] = useState({
    id: taskToBeEdited?.id,
    title: taskToBeEdited?.title,
    description: taskToBeEdited?.description,
    category: taskToBeEdited?.category,
    dateCreated: taskToBeEdited?.dateCreated,
    completed: taskToBeEdited?.completed,
  });

  //   FUNCTION TO HANDLE SETTING TASK DATA
  const handleTaskInfo = (e, dataName, data) => {
    if (dataName === "category") {
      setTaskData((prev) => {
        return { ...prev, ["category"]: data?.name };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, [dataName]: e.target.value };
      });
    }
  };
  //   END OF FUNCTION TO HANDLE SETTING TASK DATA

  //   FUNCTION TO HAANDLE TASK EDITING
  const handleCreateTask = () => {
    // FIND THE TASK TO BE UPDATED BY IT'S ID
    const updatedTask = todoData.find((task) => task.id === taskData.id);

    if (updatedTask) {
      updatedTask.title = taskData.title;
      updatedTask.description = taskData.description;
      updatedTask.category = taskData.category;
      updatedTask.dateCreated = taskData.dateCreated;
      updatedTask.completed = taskData.completed;
    }

    // TOAST
    toast("Task edited successfully!", {
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

    // CLEAR INPUT FIELDS
    setTaskData({
      id: "",
      title: "",
      description: "",
      category: "",
      dateCreated: "",
      completed: false,
    });

    // CLOSE MODAL
    handleClose();

    setTodoData([...todoData]);

    setInputState((prev) => !prev);
  };
  //   END OF FUNCTION TO HAANDLE TASK EDITING
  return (
    <div className="w-[500px] min-h-[200px] max-h-[300px] p-3 rounded-lg bg-white flex flex-col justify-between max-md:w-[350px]">
      <div className="h-[45px] font-medium ml-2 text-lwPurple flex justify-start items-center">
        Edit Task
      </div>
      <div className="border-t border-b border-b-silver border-t-silver flex-1 flex flex-wrap gap-3 p-2">
        <TextField
          id="outlined-password-input"
          label="Task Title *"
          type="text"
          autoComplete="current-password"
          size={"small"}
          onChange={(e) => handleTaskInfo(e, "title")}
          key={inputState}
          value={taskData?.title}
          inputLabelProps={{ shrink: true }}
        />
        <div className="w-[223px]">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categoryData}
            key={inputState}
            getOptionLabel={(option) => `${option?.name}`}
            onChange={(e, option) => handleTaskInfo(e, "category", option)}
            size={"small"}
            InputLabelProps={{ shrink: true }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Category *"
                placeholder={taskData?.category}
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </div>
        <div className="w-[100%]">
          <TextField
            id="outlined-password-input"
            label="Description *"
            type="text"
            autoComplete="current-password"
            multiline
            rows={4}
            fullWidth
            size="small"
            onChange={(e) => handleTaskInfo(e, "description")}
            key={inputState}
            value={taskData?.description}
            inputLabelProps={{ shrink: true }}
          />
        </div>
      </div>
      <div className=" h-[60px] flex justify-end">
        <button
          className="py-1 px-4 font-medium text-lwPurple rounded-md hover:bg-slate-50"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className={`py-1 px-4 font-medium text-lwPurple rounded-md hover:bg-slate-50 disabled:cursor-not-allowed`}
          onClick={handleCreateTask}
          disabled={
            !taskData?.category || !taskData?.title || !taskData?.description
          }
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default EditTaskModalComponent;
