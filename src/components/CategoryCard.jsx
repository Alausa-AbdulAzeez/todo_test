import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

const CategoryCard = ({
  category,
  cardStyle,
  getRandomBlob,
  setSelectedCategory,
  setFilteredTodoDataList,
  selectedCategory,
  todoData,
  categoryToBeWorked,
  handleClickOpen,
}) => {
  // CATEGORY PROP
  const { id, image, name } = category;

  // FILTER TASKS BY CATEGORY
  const tasks = todoData.filter(
    (task) => task.category === name && task.completed === false
  );

  // FILTER TASKS BY COMPLETED STATUS
  const completedTasks = todoData.filter((task) => task.completed === true);

  // FUNCTION TO HANDLE SELECTED CATEGORY
  const handleSelectedCategory = (e, category) => {
    if (e.target.localName === "svg") {
      if (tasks?.length > 0 || completedTasks?.length > 0) {
        toast("This item cannot be deleted as it has tasks attached to it", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "info",
        });
      } else {
        handleClickOpen("DeleteCat", category);
      }
    } else {
      setSelectedCategory(category);
      if (category?.name === "Completed") {
        setFilteredTodoDataList(completedTasks);
      } else {
        setFilteredTodoDataList(tasks);
      }
    }
  };
  // END OF FUNCTION TO HANDLE SELECTED CATEGORY

  return (
    <div
      className={`relative category h-[100px] w-[250px]  flex-1 p-2 flex items-center justify-center max-h-[114px] ${
        selectedCategory?.id === id && "!bg-[#cacaca]"
      } max-lg:w-[240px]`}
      key={id}
      style={cardStyle}
      onClick={(e) => handleSelectedCategory(e, category)}
    >
      <div className="absolute bottom-[10px] right-[10px]">
        <BsTrash className="text-red-800" />
      </div>
      <div className="w-[100px] h-[100px]">
        <img
          src={image ? image : getRandomBlob()}
          alt="category icon"
          className={`${image ? "w-[70px] h-[70px]" : "w-full h-full"}`}
        />
      </div>
      <div className="flex flex-col flex-1  pl-8">
        <h1 className="font-bold text-2xl ">{name}</h1>
        <p className="text-mainBlack opacity-[0.5] text-base font-bold">
          {id === 100
            ? completedTasks?.length === 0
              ? "No task"
              : completedTasks?.length === 1
              ? completedTasks?.length + " Task"
              : completedTasks?.length + "   Tasks"
            : tasks?.length === 0
            ? "No task"
            : tasks?.length === 1
            ? tasks?.length + " Task"
            : tasks?.length + "   Tasks"}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
