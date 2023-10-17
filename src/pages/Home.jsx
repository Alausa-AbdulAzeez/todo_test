import todoBG from '../assets/images/todoBG.svg'
import copy from '../assets/images/copy.svg'
import {
  blob1,
  blob2,
  blob3,
  blob4,
  blob5,
  blob6,
} from '../assets/images/blobs'
import { BsPen } from 'react-icons/bs'
import { HiSearch } from 'react-icons/hi'

const Home = () => {
  // CATEGORY DATA
  const category = [1, 2, 3, 4, 5, 6]

  // A COLLECTION OF BLOB SHAPES AND COLORS FOR USER GENERATED CATEGORIES
  const blobCollection = [blob1, blob2, blob3, blob4, blob5, blob6]

  // FUNCTION TO GET A RANDOM BLOB
  function getRandomBlob() {
    // Randomly select a blob from the collection
    return blobCollection[Math.floor(Math.random() * blobCollection.length)]
  }
  // END OF FUNCTION TO GET A RANDOM BLOB

  return (
    <>
      <img
        src={todoBG}
        alt=''
        className=' h-screen w-screen absolute top-0 left-0 object-cover -z-[1]'
      />
      <div
        className={`h-[100px] w-full px-32 flex items-center gap-4 sticky top-0 z-20 `}
      >
        <div className='flex-1 w-[100px] h-full flex items-center '>
          <div className='cursor-pointer flex h-[50px] bg-mainPurple text-white font-bold items-center px-3 py-5 rounded-[8px] shadow'>
            <BsPen />
            <div className='ml-3 '>New Task</div>
          </div>
        </div>
        <div className=' flex flex-[4] h-full  items-center'>
          <div className='h-[50px] flex items-center bg-white rounded-[8px] w-full px-4 inputContainer '>
            <HiSearch className='text-2xl' />
            <input
              type='text'
              className='h-full bg-transparent w-full outline-none border-none ml-4 text-[#999] font-semibold text-lg'
              placeholder='Search'
            />
          </div>
        </div>
      </div>
      <div className=' px-32 h-screen w-full overflow-x-hidden flex gap-5'>
        <div className='flex-[3] py-3 px-4 gap-3 flex flex-col overflow-y-auto'>
          <h1 className='text-2xl font-bold'>
            Task <span className='text-mainPurple'>List</span>{' '}
          </h1>
          {category?.map((cat, index) => {
            return (
              <div
                className='task h-[300px] min-w-[300px]  flex-1  flex items-center'
                key={index}
              >
                {/* <div className="w-[100px] h-[100px]">
                  <img
                    src={boy}
                    alt="category icon"
                    className="w-full h-full"
                  />
                </div> */}
                <div className='flex flex-col flex-1 bg-white  h-[110px] overflow-y-auto overflow-x-hidden relative items-center'>
                  <h3 className='font-bold text-md text-left w-full text-[#999]'>
                    Lorem ipsum dolor sit amet, dolor sit amet,amet,amet,
                    consectetur adipisicing elit. Architecto debitis,
                    repudiandae a
                  </h3>
                  <div className='absolute bottom-[0px] w-[100%] h-[35px] flex justify-between'>
                    <div className='text-md  font-semibold bg-mainYellow flex items-center justify-center py-2 px-3 copyContainer rounded-[4px] ml-2'>
                      <img src={copy} alt='copy icon' />
                    </div>
                    <div className='flex gap-0'>
                      <div className='text-mainPurple py-1 px-3 rounded-[4px] hover:bg-mainPurple hover:text-white  flex items-center font-semibold'>
                        Edit
                      </div>
                      <div className='text-mainRed py-1 px-3 rounded-[4px]  hover:bg-mainRed hover:text-white  flex items-center font-semibold'>
                        Delete
                      </div>
                      <div className='text-mainGreen py-1 px-3 rounded-[4px] hover:bg-mainGreen hover:text-white  flex items-center font-semibold'>
                        Done
                      </div>
                    </div>
                  </div>
                  {/* <p className="text-mainBlack opacity-[0.5] text-base font-bold">
                    7 tasks
                  </p> */}
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex-1 flex flex-col gap-3 items-center'>
          {category?.map((cat, index) => {
            // Generate a random tilt angle between -10 and 5 degrees
            const tiltAngle = Math.random() * 20 - 5 + 'deg'

            const cardStyle = {
              transform: `rotate(${tiltAngle})`,
            }

            return (
              <div
                className={`category h-[100px] w-[250px]  flex-1 p-2 flex items-center justify-center`}
                key={index}
                style={cardStyle}
              >
                <div className='w-[100px] h-[100px]'>
                  <img
                    src={getRandomBlob()}
                    alt='category icon'
                    className='w-full h-full'
                  />
                </div>
                <div className='flex flex-col flex-1 bg-white pl-8'>
                  <h1 className='font-bold text-2xl '>Personal</h1>
                  <p className='text-mainBlack opacity-[0.5] text-base font-bold'>
                    7 tasks
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        {/* <div className="px-32 mt-5 flex w-full flex-wrap gap-[30px]">
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
        </div> */}
      </div>
    </>
  )
}

export default Home
