import React from 'react'

export default function HeaderTitle( {title} : {title: string}) {

  return (
    <div className='  rounded-sm text-xs flex items-center '>
        <span className='absolute rounded-sm bg-amber-400 w-4 h-4'></span>
        <span className='mr-5 mt-1'>{title}</span>
    </div>
  )
}
