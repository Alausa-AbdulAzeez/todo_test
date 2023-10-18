import * as React from "react";
import Modal from "@mui/material/Modal";
import EditTaskModalComponent from "./EditTaskModalComponent";
import DeleteTaskModalComponent from "./DeleteTaskModalContent";
import AddCategoryModalComponent from "./AddCategoryModalComponent";
import DeleteCategoryModalComponent from "./DeleteCategoryModalContent";

export default function BasicModal({
  open,
  handleClose,
  NewTaskModalComponent,
  categoryData,
  setTodoData,
  todoData,
  modalType,
  taskToBeEdited,
  setCategoryData,
  categoryToBeWorked,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="h-[100%] w-[100%] flex items-center justify-center "
      >
        <>
          {modalType === "Add" && (
            <NewTaskModalComponent
              handleClose={handleClose}
              categoryData={categoryData}
              setTodoData={setTodoData}
              todoData={todoData}
            />
          )}
          {modalType === "Edit" && (
            <EditTaskModalComponent
              handleClose={handleClose}
              categoryData={categoryData}
              setTodoData={setTodoData}
              todoData={todoData}
              taskToBeEdited={taskToBeEdited}
            />
          )}
          {modalType === "Delete" && (
            <DeleteTaskModalComponent
              handleClose={handleClose}
              categoryData={categoryData}
              setTodoData={setTodoData}
              todoData={todoData}
              taskToBeEdited={taskToBeEdited}
            />
          )}
          {modalType === "DeleteCat" && (
            <DeleteCategoryModalComponent
              handleClose={handleClose}
              categoryData={categoryData}
              setCategoryData={setCategoryData}
              categoryToBeWorked={categoryToBeWorked}
            />
          )}
          {modalType === "AddCat" && (
            <AddCategoryModalComponent
              handleClose={handleClose}
              categoryData={categoryData}
              setCategoryData={setCategoryData}
            />
          )}
        </>
      </Modal>
    </div>
  );
}
