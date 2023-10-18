import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const NewTaskModalComponent = ({
  handleClose,
  categoryData,
  setTodoData,
  todoData,
}) => {
  // FUNCTION TO CONVERT DATE
  const convertDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1 and pad with leading zero if needed
    const day = String(currentDate.getDate()).padStart(2, "0"); // Pad with leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  // END OF FUNCTION TO CONVERT DATE

  // FUNCTION TO GENERATE ID
  function generateUniqueId() {
    // Create a timestamp
    const timestamp = new Date().getTime();

    // Generate a random number
    const random = Math.floor(Math.random() * 10000);

    // Combine the timestamp and random number to create a unique ID
    const uniqueId = `${timestamp}-${random}`;

    return uniqueId;
  }

  // END OF FUNCTION TO GENERATE ID

  //  THE STATE OF THE INPUTS
  const [inputState, setInputState] = useState(false);

  // TASK DATA
  const [taskData, setTaskData] = useState({
    id: generateUniqueId(),
    title: "",
    description: "",
    category: "",
    dateCreated: convertDate(),
    completed: false,
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

  //   FUNCTION TO HAANDLE TASK CREATION
  const handleCreateTask = () => {
    setInputState((prev) => !prev);

    setTodoData([taskData, ...todoData]);

    // CCLEAR INPUT FIELDS
    setTaskData({
      id: "",
      title: "",
      description: "",
      category: "",
      dateCreated: "",
      completed: false,
    });

    // TOAST
    toast("Task added successfully!", {
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
  //   END OF FUNCTION TO HAANDLE TASK CREATION
  return (
    <div className="w-[500px] min-h-[200px] max-h-[300px] p-3 rounded-lg bg-white flex flex-col justify-between max-md:w-[350px]">
      <div className="h-[45px] font-medium ml-2 text-lwPurple flex justify-start items-center">
        New Task
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
            renderInput={(params) => (
              <TextField {...params} label="Category *" />
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

export default NewTaskModalComponent;
