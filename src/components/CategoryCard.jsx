const CategoryCard = ({ category, cardStyle, getRandomBlob }) => {
  // CATEGORY PROP
  const { id, image, name, tasks } = category

  return (
    <div
      className={`category h-[100px] w-[250px]  flex-1 p-2 flex items-center justify-center`}
      key={id}
      style={cardStyle}
    >
      <div className='w-[100px] h-[100px]'>
        <img
          src={image ? image : getRandomBlob()}
          alt='category icon'
          className={`${image ? 'w-[70px] h-[70px]' : 'w-full h-full'}`}
        />
      </div>
      <div className='flex flex-col flex-1 bg-white pl-8'>
        <h1 className='font-bold text-2xl '>{name}</h1>
        <p className='text-mainBlack opacity-[0.5] text-base font-bold'>
          {tasks} task(s)
        </p>
      </div>
    </div>
  )
}

export default CategoryCard
