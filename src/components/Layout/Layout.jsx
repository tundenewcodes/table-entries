import React, { useEffect,useState } from 'react'
import { FaFirstdraft } from 'react-icons/fa'


const Layout = ( props ) => {
    const [daters, setDaters] = useState('')
  

    useEffect( () => {
    setDaters (new Date().getFullYear())
    },[])
  return (
    <section className='bg-lightgray  flex flex-col h-screen w-screen m-0 '>
      <header className='h-20 bg-chocolate  '>
        <nav className='h-full flex justify-between  items-center '>
          <FaFirstdraft className='lg:text-4xl md:text-4xl sm:text-4xl cursor-pointer text-white' />

          <ul className='flex h-full justify-between items-center mx-8 '>
            <li className='text-4xl text-white active:border-b-2 cursor-pointer px-4 lg:text-4xl md:text-3xl sm:text-xl'>
              Home
            </li>
            
            
          </ul>
        </nav>
      </header>
      
      <main className='w-full h-5/6 bg-white overflow-scroll flex flex-col  '>{props.children}</main>
      <footer  className='text-white text-2xl italic'>&copy;{daters} </footer>
    </section>
  )
}

export default Layout