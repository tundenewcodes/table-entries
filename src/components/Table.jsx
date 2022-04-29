import React, { useState, useEffect, useContext } from 'react'
import TableData from './TableData'
import { TableContext } from '../store/table-context'
import spinner from './spinner'
//import { Table } from 'semantic-ui-react'
import api from '../api/jsonApi'
import Headline from './Layout/Headline'
const Table = () => {
  const [tableData, setTableData] = useState([])
  const tableCtx = useContext(TableContext)
  useEffect(() => {
    const fetchTable = () => {
      tableCtx.getData()
    }
    fetchTable()

  }, [])
 
  const tableRows = tableCtx.tableData.map((datarow) => {
    return (
      <TableData
        key={datarow.id}
        title={datarow.title}
        body={datarow.body}
        userId={datarow.id}
      />
    )
  })

  const tableRowId = tableCtx.tableDataId.map((datarow) => {
    return (
      <TableData
        key={datarow.id}
        title={datarow.title}
        body={datarow.body}
        userId={datarow.id}
      />
    )
  } )
 let setTableRows = tableCtx.loadingTablerow 
  let toggleTable 
  
  const checkId  = tableCtx.showTable

  if ( checkId ) {
    toggleTable = setTableRows ? <p className='text-4xl'>loading...</p> :tableRowId
  }
  if ( !checkId ) {
    toggleTable =  setTableRows? <p className='text-4xl'>loading...</p>:tableRows
  }

  return (
    <section className='flex flex-col w-full justify-center -mt-12'>
      <Headline  />
      <table className='table-auto mx-8 w-5/6 justify-center flex flex-col items-center '>
        <thead className='bg-lightgray w-full mb-px h-16'>
          <tr className='flex  justify-between items-center  w-full h-full mx-4 '>
            <th className='w-2/6   text-left'>Title</th>
            <th className='w-3/6   text-left'>Body</th>
            <th className='w-1/6   text-left'>Id</th>
          </tr>
        </thead>
        <tbody className='bg-aliceblue w-full mt-4  h-5/6'>
          {toggleTable}
        </tbody>
      </table>
    </section>
  )
}

export default Table
