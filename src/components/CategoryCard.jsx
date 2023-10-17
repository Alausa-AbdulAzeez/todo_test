const CategoryCard = ({
  category,
  cardStyle,
  getRandomBlob,
  setSelectedCategory,
  setFilteredTodoDataList,
  selectedCategory,
}) => {
  // CATEGORY PROP
  const { id, image, name, tasks } = category;

  // FUNCTION TO HANDLE SELECTED CATEGORY
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
    setFilteredTodoDataList(category?.tasks);
  };
  // END OF FUNCTION TO HANDLE SELECTED CATEGORY

  return (
    <div
      className={`category h-[100px] w-[250px]  flex-1 p-2 flex items-center justify-center max-h-[114px] ${
        selectedCategory?.id === id && "!bg-[#cacaca]"
      }`}
      key={id}
      style={cardStyle}
      onClick={() => handleSelectedCategory(category)}
    >
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
          {tasks?.length === 0
            ? "No task"
            : tasks?.length === 1
            ? tasks?.length + " Task"
            : tasks?.length + "   Tasks"}{" "}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
