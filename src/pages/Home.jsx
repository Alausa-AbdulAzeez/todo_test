import todoBG from "../assets/images/todoBG.svg";
import Navbar from "../components/Navbar";
import boy from "../assets/images/boy.png";
import { BsPen } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";

const Home = () => {
  // CATEGORY DATA
  const category = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <img
        src={todoBG}
        alt=""
        className=" h-screen w-screen absolute top-0 left-0 object-cover -z-[1]"
      />
      <div className="h-screen w-screen overflow-x-hidden">
        {/* <Navbar /> */}
        <div className=" h-[100px] w-full px-32 flex items-center gap-4">
          <div className="flex-1 w-[100px] h-full flex items-center ">
            <div className="cursor-pointer flex h-[50px] bg-mainPurple text-white font-bold items-center px-3 py-5 rounded-[8px] shadow">
              <BsPen />
              <div className="ml-3 ">New Task</div>
            </div>
          </div>
          <div className=" flex flex-[4] h-full  items-center">
            <div className="h-[50px] flex items-center bg-white rounded-[8px] w-full px-4 inputContainer ">
              <HiSearch className="text-2xl" />
              <input
                type="text"
                className="h-full bg-transparent w-full outline-none border-none ml-4 text-[#999] font-semibold text-lg"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="px-32 mt-5 flex w-full flex-wrap gap-[30px]">
          {category?.map((cat, index) => {
            return (
              <div
                className="category h-[150px] min-w-[300px]  flex-1 p-2 flex items-center"
                key={index}
              >
                <div className="w-[100px] h-[100px]">
                  <img
                    src={boy}
                    alt="category icon"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col flex-1 bg-white pl-8">
                  <h1 className="font-bold text-2xl ">Personal</h1>
                  <p className="text-mainBlack opacity-[0.5] text-base font-bold">
                    7 tasks
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
