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
import { HiSearch, HiX } from 'react-icons/hi'
import TaskCard from '../components/TaskCard'
import { useState } from 'react'
import { briefcase, education, healthcare, shopping } from '../assets/images'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  // INPUT VALUE
  const [inputValue, setInputValue] = useState('')

  // INPUT STATE, (FOCUED OR NOT)
  const [isInputFocused, setInputFocused] = useState(false)

  // FUNCTION TO RESET INPUT VALUE
  const handleCancelClick = () => {
    setInputValue('')
  }
  // END OF FUNCTION TO RESET INPUT VALUE

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
  const categoryData = [
    {
      id: 1,
      name: 'Work',
      image: briefcase,
      tasks: 8,
    },
    {
      id: 2,
      name: 'Personal',
      image: shopping,
      tasks: 3,
    },
    {
      id: 3,
      name: 'Health',
      image: healthcare,
      tasks: 6,
    },

    {
      id: 5,
      name: 'Education',
      color: education,
      tasks: 5,
    },
    {
      id: 6,
      name: 'General',
      color: null,
      tasks: 2,
    },
  ]

  // A COLLECTION OF BLOB SHAPES AND COLORS FOR USER GENERATED CATEGORIES
  const blobCollection = [blob1, blob2, blob3, blob4, blob5, blob6]

  // FUNCTION TO GET A RANDOM BLOB
  function getRandomBlob() {
    // Randomly select a blob from the collection
    return blobCollection[Math.floor(Math.random() * blobCollection.length)]
  }
  // END OF FUNCTION TO GET A RANDOM BLOB

  // FUNCTION TO FILTER TASKS BASED ON INPUT VALUE
  const filteredTasks = (inputText) => {
    todoData.filter((task) => {
      return (
        task.title.toLowerCase().includes(inputText.toLowerCase()) ||
        task.description.toLowerCase().includes(inputText.toLowerCase())
      )
    })
  }
  // END OF FUNCTION TO FILTER TASKS BASED ON INPUT VALUE

  // FUNCTION TO FILTER CATEGORIES BASED ON INPUT VALUE
  const filteredCategories = (inputText) => {
    categoryData.filter((category) => {
      return category.name.toLowerCase().includes(inputText.toLowerCase())
    })
  }
  // END OF FUNCTION TO FILTER CATEGORIES BASED ON INPUT VALUE

  // FUNCTION TO HANDLE INPUT CHANGE
  const handleInputChange = (e) => {
    const inputText = e.target.value
    setInputValue(inputText)

    // Filter categories

    // Update your category and task lists here or set them in the state
  }
  // END OF FUNCTION TO HANDLE INPUT CHANGE

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
          <div
            className={`h-[50px] flex items-center bg-white rounded-[8px] w-full px-4 inputContainer ${
              isInputFocused && 'drop-shadow-2xl'
            }`}
          >
            <HiSearch className='text-2xl' />
            <input
              type='text'
              className='h-full bg-transparent w-full outline-none border-none ml-4 text-[#999] font-semibold text-lg'
              placeholder='Search'
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
            />
            {inputValue && (
              <HiX
                className='text-2xl cursor-pointer'
                onClick={handleCancelClick}
              />
            )}
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
          {categoryData?.map((category) => {
            const { id } = category

            // Generate a random tilt angle between -10 and 5 degrees
            const tiltAngle = Math.random() * 20 - 5 + 'deg'

            const cardStyle = {
              transform: `rotate(${tiltAngle})`,
            }

            return (
              <CategoryCard
                category={category}
                key={id}
                cardStyle={cardStyle}
                getRandomBlob={getRandomBlob}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
