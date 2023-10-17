import todoBG from '../assets/images/todoBG.svg'
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
import TaskCard from '../components/TaskCard'
import { useState } from 'react'

const Home = () => {
  // TODOS
  const todoData = [
    {
      id: 1,
      title: 'Finish React Project',
      description:
        'Complete the frontend and backend integration for the React project.',
      category: 'Work',
      dateCreated: '2023-10-15',
      completed: false,
    },
    {
      id: 2,
      title: 'Grocery Shopping',
      description: 'Buy fruits, vegetables, and household essentials.',
      category: 'Personal',
      dateCreated: '2023-10-16',
      completed: false,
    },
    {
      id: 3,
      title: 'Prepare Presentation',
      description: 'Create a presentation for the upcoming meeting.',
      category: 'Work',
      dateCreated: '2023-10-17',
      completed: true,
    },
    {
      id: 4,
      title: 'Gym Workout',
      description: 'Hit the gym for a workout session.',
      category: 'Health',
      dateCreated: '2023-10-18',
      completed: false,
    },
    {
      id: 5,
      title: 'Read a Book',
      description: 'Spend an hour reading a new novel.',
      category: 'Personal',
      dateCreated: '2023-10-19',
      completed: true,
    },
  ]

  // CURRENTLY COPIED PROMPT
  const [copied, setCopied] = useState('')

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
          {todoData?.map((todo) => {
            const { id } = todo
            return (
              <TaskCard
                todo={todo}
                key={id}
                setCopied={setCopied}
                copied={copied}
              />
            )
          })}
        </div>
        <div className='flex-1 flex flex-col gap-3 items-center  overflow-y-auto'>
          <div className='flex w-full'>
            <h1 className='text-2xl font-bold text-left '>Categories</h1>
            <div className='cursor-pointer flex h-[50px] bg-mainPurple text-white font-bold items-center px-3 py-5 rounded-[8px] shadow fixed bottom-[40px] right-[40px] z-[90]'>
              <BsPen />
              <div className='ml-3 '>New Category</div>
            </div>
          </div>
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
      </div>
    </>
  )
}

export default Home
