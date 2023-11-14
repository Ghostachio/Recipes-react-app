import React from 'react'

const Recipes = ({title, image, calories, ingredients}) => {
  return (
    <div className='flex gap-6 flex-col justify-between bg-[#ccd5ae] w-[500px] h-auto items-center p-9 m-5 rounded-3xl pb-11 shadow-xl shadow-[#2f3e46]'>
      <div className='pt-6'>
      <img className='rounded-full w-[200px] h-[200px] self-center border-8 border-[#e9edc9] shadow-2xl shadow-[#84a98c]' src={image} alt='IMAGE'/>
      </div>
      <h1 className=' text-3xl pb-3 h-[200px] w-auto leading-loose text-center uppercase pt-8 text-[#52796f] '>{title}</h1>
      <div className='pt-[120px]'>
      <p  className='text-3xl pt-3 h-[80px] leading-loose uppercase text-center bg-[#e9edc9] w-[300px] rounded-xl shadow-2xl text-[#354f52]'>{calories} Calories </p>
      </div>
      <ul className='flex flex-col text-start text-2xl pt-11 pr-4 pl-4'>
        {ingredients.map(ingredient => (
          <li className='list-disc text-[#354f52] '>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes