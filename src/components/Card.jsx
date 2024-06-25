import React from 'react'

function Card({title,logo,unit,val}) {
  return (
    <div className='bg-[#00000077] text-slate-300 flex flex-col p-2 rounded-xl '>
      <h3 >
        <span className='mr-1'>
          <i className={logo}></i></span>
          {title}
          </h3>
      <h5 className='text-2xl text-white'>{val}{unit}</h5>
    </div>
  )
}

export default Card