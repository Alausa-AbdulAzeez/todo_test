import todoBG from '../assets/images/todoBG.svg'
import Navbar from '../components/Navbar'
import boy from '../assets/images/boy.png'

const Home = () => {
  // CATEGORY DATA
  const category = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <img
        src={todoBG}
        alt=''
        className=' h-screen w-screen absolute top-0 left-0 object-cover -z-[1]'
      />
      <div className='h-screen w-screen'>
        <Navbar />
        <div className='px-32 mt-5 flex w-full flex-wrap gap-[30px]'>
          {category?.map((cat, index) => {
            return (
              <div
                className='category h-[150px] min-w-[300px]  flex-1 p-2 flex items-center'
                key={index}
              >
                <div className='w-[100px] h-[100px]'>
                  <img
                    src={boy}
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
