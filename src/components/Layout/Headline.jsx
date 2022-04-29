import React, {useRef, useContext} from 'react'
import  {TableContext}  from '../../store/table-context'
import { FaSearch } from 'react-icons/fa'
const Headline = () => {
  const tableCtx = useContext(TableContext)
  const searchRef = useRef()

  const searchData =(props)=>{
    const value = searchRef.current.value

   tableCtx.getDataById(value)

  
  }
  return (
    <section className='md:mt-4 sm:mt-8 lg:mt-4 h-28 flex w-full flex-col mb-8  justify-end '>
      {' '}
      <div className=' flex w-full justify-end  '>
        {' '}
        <div className='w-80  mr-4 relative'>
          <input onKeyUp={searchData}
        ref = {searchRef}
            type='text'
            placeholder="please search table by id"
            className=" place-content-start  border-1 border-solid border-aliceblue hover:ease-in p-4 lg:h-12 md:h-8 sm:h-8 sm:p-2 outline-0 bg-lightgray rounded-full  w-full placeholder-'search table by id'"
          />
          <FaSearch onClick ={searchData} className='absolute hover:scale-0.75 hover:text-chocolate rounded-full h-full sm:text-2xl md:text-3xl lg:text-4xl cursor-pointer    top-px right-4 text-white' />
        </div>
      </div>
      <h1 className='my-8  uppercase lg:text-4xl md:text-3xl font-mono text-center sm:text-xl'>
   JSONPLACEHOLDER data in a  table representation
      </h1>
    </section>
  )
}

export default Headline