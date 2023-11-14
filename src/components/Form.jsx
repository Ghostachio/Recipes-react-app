import React from 'react'

const Form = ({onChange, onClick }) => {
  return (
    <div>
      <form className='flex justify-center gap-5 pb-11 flex-wrap'>
        <input className='border-[#ccd5ae] border-2 rounded-xl w-[300px] h-11 text-center uppercase text-lg font-bold text-[#52796f]' type="text"  onChange={onChange}/>
        <input className=' bg-[#ccd5ae] font-bold pl-2 pr-2 rounded-xl clk hover:scale-125 hover:text-white transition duration-500' type="submit" value="SEARCH" onClick={onClick} />
      </form>
    </div>
  )
}

export default Form