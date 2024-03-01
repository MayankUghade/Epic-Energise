import React from 'react'
import linkedin from "../Assets/linkedin.png"
import github from "../Assets/github.png"
import x from "../Assets/x.png"

export const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-black rounded-top-lg w-full'>
      <div className='p-8 items-center justify-center'>
        <h1 className='text-white text-center font-semibold text-lg mt-3'>Made by @mayank_ughade😄</h1>
        <h1 className='text-white text-center mt-3'>links</h1>
        <div className='flex flex-row gap-6 items-center justify-center mt-3'>
          <a className='w-[34px] h-[34px]' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mayank-ughade-63aab7229/" ><img src={linkedin} alt="Linkedin" /></a>
          <a className='w-[30px] h-[30px]' rel="noreferrer" target="_blank"  href="https://github.com/MayankUghade"><img src={github} alt="github" /></a>
          <a className='w-[30px] h-[30px]' rel="noreferrer" target="_blank"  href="https://twitter.com/MayankUghade3"><img className='w-[30px] h-[30px]' src={x} alt="twitter" /></a>
        </div>
      </div>  
    </div>
  )
}
