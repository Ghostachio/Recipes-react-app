import React from 'react'

const Recipes = ({title, image, calories, ingredients}) => {
  return (
    <div className='flex gap-[60px] flex-row justify-between bg-slate-600 w-auto h-auto items-center p-9 m-5'>
      <img className='rounded-full w-[300px] h-[300px] self-center' src={image} alt='IMAGE'/>
      <h1 className=' text-2xl pb-3 w-[200px] leading-loose'>{title}</h1>
      <p  className='flex text-3xl pt-3 h-auto leading-loose '>Calories <br></br>  {calories}</p>
      <ul className='flex flex-col text-start'>
        {ingredients.map(ingredient => (
          <li className='list-disc'>{ingredient.text}t</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes