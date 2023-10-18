import todoBG from "../assets/images/todoBG.svg";
import {
  blob1,
  blob2,
  blob3,
  blob4,
  blob5,
  blob6,
} from "../assets/images/blobs";
import { BsPen } from "react-icons/bs";
import { HiSearch, HiX } from "react-icons/hi";
import TaskCard from "../components/TaskCard";
import { useState } from "react";
import {
  briefcase,
  education,
  empty,
  healthcare,
  shopping,
} from "../assets/images";
import CategoryCard from "../components/CategoryCard";
import BasicModal from "../components/Modal";
import NewTaskModalComponent from "../components/NewTaskModalComponent";
import { ToastContainer } from "react-toastify";
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
  const categories = [
    {
      id: 1,
      name: "Work",
      image: briefcase,
    },
    {
      id: 2,
      name: "Personal",
      image: shopping,
    },
    {
      id: 3,
      name: "Health",
      image: healthcare,
    },

    {
      id: 5,
      name: "Education",
      color: education,
    },
    {
      id: 6,
      name: "General",
      color: null,
    },
  ];
  const [categoryData, setCategoryData] = useState(categories);

  // CURRENTLY COPIED PROMPT
  const [copied, setCopied] = useState("");

  // SELECTED CATEGORY
  const [selectedCategory, setSelectedCategory] = useState(null);

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
  };

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
    setCategoryData(initialCategoryData);
  }, []);

  // USE EFFECT TO SAVE DATA TO LOCAL STORAGE
  useEffect(() => {
    const saveTodoData = JSON.stringify(todoData);
    const saveCategoryData = JSON.stringify(categoryData);

    localStorage.setItem("todoData", saveTodoData);
    localStorage.setItem("categoryData", saveCategoryData);
    setFilteredTodoDataList(todoData);
  }, [todoData, categoryData]);

  return (
    <>
      <img
        src={todoBG}
        alt=""
        className=" h-screen w-screen absolute top-0 left-0 object-cover -z-[1]"
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
      />
      <div
        className={`h-[100px] w-full px-32 flex items-center gap-4 sticky top-0 z-20 `}
      >
        <div className="flex-1 w-[100px] h-full flex items-center ">
          <div
            className="cursor-pointer flex h-[50px] bg-mainPurple text-white font-bold items-center px-3 py-5 rounded-[8px] shadow"
            onClick={() => handleClickOpen("Add")}
          >
            <BsPen />
            <div className="ml-3 ">New Task</div>
          </div>
        </div>
        <div className=" flex flex-[4] h-full  items-center">
          <div
            className={`h-[50px] flex items-center bg-white rounded-[8px] w-full px-4 inputContainer relative ${
              isInputFocused && "drop-shadow-2xl"
            }`}
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
              placeholder="Search"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
              disabled={selectedCategory ? true : false}
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
      <div className=" px-32 h-screen w-full overflow-x-hidden flex gap-5">
        <div className="flex-[3] py-3 px-4 gap-3 flex flex-col overflow-y-scroll">
          <h1 className="text-2xl font-bold">
            Task <span className="text-mainPurple">List</span>{" "}
          </h1>

          {filteredTodoDataList?.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-start">
              <img src={empty} alt="empty" className="h-[60%]" />
              <h3 className="text-2xl font-bold text-[#7c7c7c]">
                There's nothing to show here
              </h3>
            </div>
          ) : (
            filteredTodoDataList?.map((todo) => {
              const { id } = todo;
              return (
                <TaskCard
                  todo={todo}
                  key={id}
                  setCopied={setCopied}
                  copied={copied}
                  handleClickOpen={handleClickOpen}
                />
              );
            })
          )}
        </div>
        <div className="flex-1 flex flex-col gap-3 items-center  overflow-y-auto">
          <div className="flex w-full">
            <h1 className="text-2xl font-bold text-left ">Categories</h1>
            <div className="cursor-pointer flex h-[50px] bg-mainPurple text-white font-bold items-center px-3 py-5 rounded-[8px] shadow fixed bottom-[40px] right-[40px] z-[90]">
              <BsPen />
              <div className="ml-3 ">New Category</div>
            </div>
          </div>
          {filteredCategoryList?.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-start">
              <img src={empty} alt="empty" className="h-[50%]" />
              <h3 className="text-xl font-bold text-[#7c7c7c]">
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
