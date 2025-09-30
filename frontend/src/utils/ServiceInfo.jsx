import React from 'react'

function ServiceInfo(props) {
  return (
    <div className='h-[500px] w-[350px] rounded-md relative  hover:shadow-purple hover:-translate-y-5 transition-all'>
      <div className='w-[350px] h-[1px] absolute bottom-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent '></div>
      <img className='w-full h-[250px] object-cover' src={props.url}>
      </img>
      <h1 className='w-full p-2 text-2xl font-bold h-fit text-[#111] dark:text-white text-center '>{props.title}</h1>
      <p className='w-full h-fit font-semibold p-2 text-neutral-600 '>
        {props.para}
      </p>
    </div>
  )
}

export default ServiceInfo
