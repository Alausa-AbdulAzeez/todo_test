import {
  blob1,
  blob2,
  blob3,
  blob4,
  blob5,
  blob6,
} from "../assets/images/blobs/index";
import { BsPen } from "react-icons/bs";
import { HiSearch, HiX } from "react-icons/hi";
import TaskCard from "../components/TaskCard";
import { useState } from "react";
import {
  briefcase,
  checkedImg,
  education,
  empty,
  healthcare,
  shopping,
  todoBG,
} from "../assets/images/index";
import CategoryCard from "../components/CategoryCard";
import BasicModal from "../components/Modal";
import NewTaskModalComponent from "../components/NewTaskModalComponent";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const Home = () => {
  // DIALOGUE STATE
  const [open, setOpen] = useState(false);

  // INPUT VALUE
  const [inputValue, setInputValue] = useState("");

  // INPUT STATE, (FOCUED OR NOT)
  const [isInputFocused, setInputFocused] = useState(false);

  // TODOS
  const todos = [
    {
      id: 1,
      title: "Finish React Project",
      description:
        "Complete the frontend and backend integration for the React project.",
      category: "Work",
      dateCreated: "2023-10-15",
      completed: false,
    },
    {
      id: 2,
      title: "Grocery Shopping",
      description: "Buy fruits, vegetables, and household essentials.",
      category: "Personal",
      dateCreated: "2023-10-16",
      completed: false,
    },
    {
      id: 3,
      title: "Prepare Presentation",
      description: "Create a presentation for the upcoming meeting.",
      category: "Work",
      dateCreated: "2023-10-17",
      completed: true,
    },
    {
      id: 4,
      title: "Gym Workout",
      description: "Hit the gym for a workout session.",
      category: "Health",
      dateCreated: "2023-10-18",
      completed: false,
    },
    {
      id: 5,
      title: "Read a Book",
      description: "Spend an hour reading a new novel.",
      category: "Personal",
      dateCreated: "2023-10-19",
      completed: true,
    },
  ];
  const [todoData, setTodoData] = useState([]);

  // CATEGORY DATA
  let categories = [
    {
      id: 100,
      name: "Completed",
      image: checkedImg,
      default: true,
    },
    {
      id: 1,
      name: "Work",
      image: briefcase,
      default: true,
    },
    {
      id: 2,
      name: "Personal",
      image: shopping,
      default: true,
    },
    {
      id: 3,
      name: "Health",
      image: healthcare,
      default: true,
    },

    {
      id: 5,
      name: "Education",
      color: education,
      default: true,
    },
    {
      id: 6,
      name: "General",
      color: null,
      default: true,
    },
  ];
  const [categoryData, setCategoryData] = useState(categories);

  // CURRENTLY COPIED PROMPT
  const [copied, setCopied] = useState("");

  // SELECTED CATEGORY
  const [selectedCategory, setSelectedCategory] = useState(null);

  // SELECTED CATEGORY TO BE WORKED ON
  const [categoryToBeWorked, setCategoryToBeWorked] = useState(null);

  // SET MODAL CONTENT TYPE
  const [modalType, setModalType] = useState("");

  // SET TASK TO BE EDITED
  const [taskToBeEdited, setTaskToBeEdited] = useState({});

  // FILTERED CATEGORY AND TASKS
  const [filteredCategoryList, setFilteredCategoryList] =
    useState(categoryData);
  const [filteredTodoDataList, setFilteredTodoDataList] = useState(todoData);

  // A COLLECTION OF BLOB SHAPES AND COLORS FOR USER GENERATED CATEGORIES
  const blobCollection = [blob1, blob2, blob3, blob4, blob5, blob6];

  // FUNCTION TO GET A RANDOM BLOB
  function getRandomBlob() {
    // Randomly select a blob from the collection
    return blobCollection[Math.floor(Math.random() * blobCollection.length)];
  }
  // END OF FUNCTION TO GET A RANDOM BLOB

  // FUNCTION TO RESET INPUT VALUE
  const handleCancelClick = () => {
    setInputValue("");
    setFilteredCategoryList(categoryData);
    setFilteredTodoDataList(todoData);
    setSelectedCategory(null);
  };
  // END OF FUNCTION TO RESET INPUT VALUE

  // FUNCTIONALITY FOR OPENING AND CLOSING OF DIALOGUE
  const handleClickOpen = (type, task) => {
    setOpen(true);
    if (type === "Add") {
      setModalType("Add");
    }
    if (type === "Edit") {
      setModalType("Edit");
      setTaskToBeEdited(task);
    }
    if (type === "Delete") {
      setModalType("Delete");
      setTaskToBeEdited(task);
    }
    if (type === "DeleteCat") {
      setModalType("DeleteCat");
      setCategoryToBeWorked(task);
    }
    if (type === "AddCat") {
      setModalType("AddCat");
    }
  };

  // FUNCTION TO TOGGLE COMPLETION
  const toggleCompletion = (itemId) => {
    const updatedList = todoData.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoData(updatedList);

    // TOAST
    toast("Task completed successfully!", {
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
  };
  // END OF FUNCTION TO TOGGLE COMPLETION

  const handleClose = () => {
    setOpen(false);
  };
  // END OF FUNCTIONALITY FOR OPENING AND CLOSING OF DIALOGUE

  // FUNCTION TO HANDLE INPUT CHANGE
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);

    const filteredCategories = categoryData.filter((category) => {
      return category.name.toLowerCase().includes(inputText.toLowerCase());
    });
    const filteredTasks = todoData.filter((task) => {
      return (
        task.title.toLowerCase().includes(inputText.toLowerCase()) ||
        task.description.toLowerCase().includes(inputText.toLowerCase())
      );
    });

    setFilteredCategoryList(filteredCategories);
    setFilteredTodoDataList(filteredTasks);
  };
  // END OF FUNCTION TO HANDLE INP

  // USE EFFECT TO GET AND SET DATA FROM LOCAL STORAGE
  useEffect(() => {
    const storedTodoData = localStorage.getItem("todoData");
    const storedCategoryData = localStorage.getItem("categoryData");

    const initialTodoData = storedTodoData
      ? JSON.parse(storedTodoData)
      : todoData;
    const initialCategoryData = storedCategoryData
      ? JSON.parse(storedCategoryData)
      : categories;

    setTodoData(initialTodoData);
    setFilteredTodoDataList(initialTodoData);
    setFilteredCategoryList(initialCategoryData);
    setCategoryData(initialCategoryData);
  }, []);

  // USE EFFECT TO SAVE DATA TO LOCAL STORAGE
  useEffect(() => {
    const saveTodoData = JSON.stringify(todoData);
    const saveCategoryData = JSON.stringify(categoryData);

    localStorage.setItem("todoData", saveTodoData);
    localStorage.setItem("categoryData", saveCategoryData);
    setFilteredTodoDataList(todoData);
    setFilteredCategoryList(categoryData);
  }, [todoData, categoryData]);

  return (
    <>
      <img
        src={todoBG}
        alt="home bg"
        className="h-screen w-screen absolute top-0 left-0 object-cover -z-[1]"
      />
      <ToastContainer />
      <BasicModal
        open={open}
        handleClose={handleClose}
        NewTaskModalComponent={NewTaskModalComponent}
        categoryData={categoryData}
        setTodoData={setTodoData}
        todoData={todoData}
        modalType={modalType}
        taskToBeEdited={taskToBeEdited}
        setCategoryData={setCategoryData}
        categoryToBeWorked={categoryToBeWorked}
      />
      <div
        className={`h-[100px] w-full px-20 flex items-center gap-4 sticky top-0 z-20 max-md:px-3 max-lg:px-6 `}
      >
        <div className="flex-1 w-[100px] h-full flex items-center ">
          <div
            className="cursor-pointer flex h-[50px] bg-mainPurple text-white font-bold items-center px-3 py-5 rounded-[8px] shadow "
            onClick={() => handleClickOpen("Add")}
          >
            <BsPen />
            <div className="ml-3 " data-testid="newTaskId">
              New Task
            </div>
          </div>
        </div>
        <div className=" flex flex-[4] h-full  items-center max-md:flex-[2]">
          <div
            className={`h-[50px] flex items-center bg-white rounded-[8px] w-full px-4 inputContainer relative ${
              isInputFocused && "drop-shadow-2xl"
            } max-md:w-50% `}
          >
            {selectedCategory && (
              <div className="absolute left-14 cursor-pointer flex flex-row-reverse h-[40px] bg-[#cacaca] text-white font-bold items-center px-3 py-5 rounded-[8px] shadow">
                <HiX onClick={() => handleCancelClick()} />
                <div className="mr-3 ">{selectedCategory?.name}</div>
              </div>
            )}

            <HiSearch className="text-2xl" />
            <input
              type="text"
              className="h-full bg-transparent w-full outline-none border-none ml-4 text-[#999] font-semibold text-lg"
              placeholder={selectedCategory ? "" : "Search"}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
              disabled={selectedCategory ? true : false}
              data-testid="searchId"
            />
            {inputValue && (
              <HiX
                className="text-2xl cursor-pointer"
                onClick={handleCancelClick}
              />
            )}
          </div>
        </div>
      </div>
      <div className=" px-20 h-screen w-full overflow-x-hidden flex gap-5 max-md:px-3 max-lg:px-6  max-md:flex-col">
        <div className="w-[70%] py-3 px-4 gap-3 flex flex-col overflow-y-scroll max-md:w-[100%] max-lg:flex-none max-lg:w-[60%] max-xl:w-[65%] max-xl:overflow-y-auto">
          <h1 className="text-2xl font-bold" data-testid="taskList">
            Task <span className="text-mainPurple">List</span>{" "}
          </h1>
          {selectedCategory?.name === "Completed" ? (
            filteredTodoDataList?.length === 0 ||
            filteredTodoDataList?.filter((todo) => todo.completed === true)
              ?.length === 0 ? (
              <div className="w-full h-full flex flex-col items-center justify-start">
                <img src={empty} alt="empty" className="h-[60%]" />
                <h3 className="text-2xl font-bold text-[#7c7c7c] text-center">
                  There's nothing to show here
                </h3>
              </div>
            ) : (
              filteredTodoDataList
                ?.filter((todo) => todo.completed === true)
                ?.map((todo) => {
                  const { id } = todo;
                  return (
                    <TaskCard
                      todo={todo}
                      key={id}
                      setCopied={setCopied}
                      copied={copied}
                      handleClickOpen={handleClickOpen}
                      toggleCompletion={toggleCompletion}
                    />
                  );
                })
            )
          ) : filteredTodoDataList?.length === 0 ||
            filteredTodoDataList?.filter((todo) => todo.completed === false)
              ?.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-start">
              <img src={empty} alt="empty" className="h-[60%]" />
              <h3 className="text-2xl font-bold text-[#7c7c7c] text-center">
                There's nothing to show here
              </h3>
            </div>
          ) : (
            filteredTodoDataList
              ?.filter((todo) => todo.completed === false)
              ?.map((todo) => {
                const { id } = todo;
                return (
                  <TaskCard
                    todo={todo}
                    key={id}
                    setCopied={setCopied}
                    copied={copied}
                    handleClickOpen={handleClickOpen}
                    toggleCompletion={toggleCompletion}
                  />
                );
              })
          )}
        </div>
        <div className="flex-1 flex flex-col gap-3 items-center overflow-y-auto max-md:hidden">
          <div
            className="cursor-pointer flex h-[50px] bg-mainPurple text-white font-bold items-center px-3 py-5 rounded-[8px] shadow fixed bottom-[40px] right-[40px] z-[90]"
            onClick={() => handleClickOpen("AddCat")}
          >
            <BsPen />
            <div className="ml-3 ">New Category</div>
          </div>
          <div className="flex w-full  ">
            <h1 className="text-2xl font-bold text-left ">Categories</h1>
          </div>
          {filteredCategoryList?.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-start">
              <img src={empty} alt="empty" className="h-[50%]" />
              <h3 className="text-xl font-bold text-[#7c7c7c] text-center">
                There's nothing to show here
              </h3>
            </div>
          ) : (
            filteredCategoryList?.map((category) => {
              const { id } = category;

              // Generate a random tilt angle between -10 and 5 degrees
              const tiltAngle = Math.random() * 20 - 5 + "deg";
              const cardStyle = {
                transform: `rotate(${tiltAngle})`,
              };
              return (
                <CategoryCard
                  category={category}
                  key={id}
                  cardStyle={cardStyle}
                  getRandomBlob={getRandomBlob}
                  setSelectedCategory={setSelectedCategory}
                  setFilteredTodoDataList={setFilteredTodoDataList}
                  selectedCategory={selectedCategory}
                  todoData={todoData}
                  categoryToBeWorked={categoryToBeWorked}
                  handleClickOpen={handleClickOpen}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
