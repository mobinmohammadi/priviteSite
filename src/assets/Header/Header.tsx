import React from 'react'

export default function Header() {
  return ( 
    <div className='bg-primary text-white font-Dana h-48 rounded-bl-4xl p-5 rounded-md'>
      <div className="flex  justify-between item-center ">

        <div className="text-sm flex flex-col gap-2 jus-ce">
            <span>مبین محمدی</span><div>برنامه نویس و توسعه دهنده وبسایت</div>
        </div>
        <div className="">
            <img className='w-32 h-32 rounded-full cover' src="/Img/Mobin.jpg" alt="" />
        </div>
      </div>
      
    </div>
  )
}
