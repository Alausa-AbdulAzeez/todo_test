import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddCategoryModalComponent = ({
  handleClose,
  categoryData,
  setCategoryData,
}) => {
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

  // CATEGORY NAME
  const [categoryName, setCategoryName] = useState({
    id: generateUniqueId(),
    name: "",
    image: null,
    default: false,
  });

  //   FUNCTION TO HANDLE SETTING CATEGORY NAME
  const handleCategoryNameChange = (e, dataName, data) => {
    setCategoryName((prev) => {
      return { ...prev, [dataName]: e.target.value };
    });
  };
  //   END OF FUNCTION TO HANDLE SETTING CATEGORY NAME

  //   FUNCTION TO HAANDLE CATEGORY NAME CREATION
  const handleCreateCategory = () => {
    setInputState((prev) => !prev);

    // CCLEAR INPUT FIELDS
    setCategoryName({
      id: generateUniqueId(),
      name: "",
      image: null,
      default: false,
    });

    // TOAST
    toast("Category added successfully!", {
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

    setCategoryData([categoryName, ...categoryData]);

    // CLOSE MODAL
    handleClose();
  };
  //   END OF FUNCTION TO HAANDLE CATEGORY NAME CREATION
  return (
    <div className="w-[500px] min-h-[200px] max-h-[300px] p-3 rounded-lg bg-white flex flex-col justify-between">
      <div className="h-[45px] font-medium ml-2 text-lwPurple flex justify-start items-center">
        New Category
      </div>
      <div className=" w-full border-t border-b border-b-silver border-t-silver flex-1 flex flex-wrap gap-3 p-2">
        <TextField
          id="outlined-password-input"
          label="Category Name *"
          type="text"
          autoComplete="current-password"
          size={"small"}
          onChange={(e) => handleCategoryNameChange(e, "name")}
          key={inputState}
          fullWidth
        />
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
          onClick={handleCreateCategory}
          disabled={!categoryName?.name}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddCategoryModalComponent;
