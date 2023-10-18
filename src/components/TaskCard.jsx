import { copy, tick } from "../assets/images";

const TaskCard = ({
  todo,
  setCopied,
  copied,
  handleClickOpen,
  toggleCompletion,
}) => {
  // TASK PROPS
  const { id, title, description, category, dateCreated, completed } = todo;

  // COPY TO CLIPBOARD FUNCTION
  const handleCopy = () => {
    setCopied(description);
    navigator.clipboard.writeText(description);

    // SET COPIED BACK TO DEFAULT AFTER 3 SECONDS
    setTimeout(() => setCopied(""), 3000);
  };

  // END OF COPY TO CLIPBOARD FUNCTION

  return (
    <div
      className="task h-[300px] min-w-[300px]  flex-1  flex items-center max-h-[142px] text-sm"
      key={id}
    >
      <div className="flex flex-col flex-1 bg-white  h-[110px] overflow-y-auto overflow-x-hidden relative items-center">
        <h3 className="font-bold text-lg text-left w-full text-[#494949] max-md:text-base">
          {title}{" "}
          <span className="ml-5 text-mainGreen max-md:ml-1">({category})</span>
        </h3>
        <h3 className="font-bold text-md text-left w-full text-[#999] max-sm:text-xs max-md:text-sm">
          {description}
        </h3>
        <div className="absolute bottom-[0px] w-[100%] h-[35px] flex justify-between">
          <div className="flex items-center gap-3 h-full ">
            <div
              className="text-md h-full  font-semibold bg-mainYellow flex items-center justify-center py-2 px-3 copyContainer rounded-[4px] ml-2"
              onClick={handleCopy}
            >
              {copied === description && (
                <p className="text-xs ml-2 text-mainGreen">Copied!</p>
              )}
              <img
                src={copied === description ? tick : copy}
                alt="copy icon"
                className="w-[25px] h-[25px]"
              />
            </div>

            <h3 className="font-bold text-sm text-left w-full text-[#999] max-md:hidden">
              Created at: <span className="text-[#494949]">{dateCreated}</span>
            </h3>
          </div>

          <div className="flex gap-0">
            <div
              className="text-mainPurple py-1 px-3 rounded-[4px] hover:bg-mainPurple hover:text-white  flex items-center font-semibold"
              onClick={() => handleClickOpen("Edit", todo)}
            >
              Edit
            </div>
            <div
              className="text-mainRed py-1 px-3 rounded-[4px]  hover:bg-mainRed hover:text-white  flex items-center font-semibold"
              onClick={() => handleClickOpen("Delete", todo)}
            >
              Delete
            </div>
            <div
              className="text-mainGreen py-1 px-3 rounded-[4px] hover:bg-mainGreen hover:text-white  flex items-center font-semibold"
              onClick={() => toggleCompletion(id)}
            >
              {completed ? "Mark as undone" : "Done"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
