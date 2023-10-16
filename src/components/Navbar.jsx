import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[50px] py-8 px-32'>
      <Link to={'/'}>
        <h3 className='shadow-2xl glow-text w-fit font-bold text-2xl'>TODO</h3>
      </Link>
    </div>
  )
}

export default Navbar
