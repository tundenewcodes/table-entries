import React, { useEffect, useState, useContext } from 'react'
import { TableContext } from '../store/table-context'
//import axios from  '../api/jsonApi'

const TableData = (props) => {

    
  return (
   
      <tr className='flex   mt-2  justify-between items-center h-full w-full mx-4 '>
        <td className='w-2/6   text-left'>{props.title} </td>
        <td className='w-3/6   text-left'>{props.body}</td>
        <td className='w-1/6   text-left'>{props.userId}</td>
      </tr>
  
  )
}

export default TableData