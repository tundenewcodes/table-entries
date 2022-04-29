import api  from '../api/jsonApi'
import React,{useState} from 'react'


export const TableContext = React.createContext( {
    tableData: [],
    tableDataId :[],
    getData : ()=>{},
    getDataById : (id)=>{},
    loadingTablerow : false,
    showTable : false
})


const TableContextProvider = ( props ) => {
    const [ post, setPost ] = useState( [] )
    const [ postId, setPostID ] = useState( [] )
    const [ isLoading, setisLoading ] = useState( false )
    const [loadTable, setLoadTable]= useState(false)
    
    const getTable = async () => {
        setisLoading(true)
        const response = await api.get( '/posts' )

        const data = response.data
        let allData = []

        for ( let key in data ) {
            allData.push( {
                id: key,
                body: data[ key ].body,
                title: data[ key ].title,
                userId: data[ key ].userId,
            } )
        }
        setPost( allData )
        setisLoading( false )
        
        //console.log(post)
    }
    const getTableId = async(id) => {
         setisLoading(true)
        const response = await api.get( `/posts/${id}` )

        const data = response.data
        let allData = []
        console.log( data )

        allData.push( {
            id: data.id,
            body: data.body,
            title: data.title,
            userId : data.userId
        })
//const keys = Object.keys(data)
        // for ( let key in data ) {
        //     allData.push( {
        //         id: key,
        //         body: data[ key ].body,
        //         title: data[ key ].title,
        //         userId: data[ key ].userId,
        //     } )
        // }
        
       setPostID(allData)
        setisLoading( false )
        setLoadTable(true)
       
        
        
    }
    const context = {
      tableData: post,
      getData: getTable,
        getDataById: getTableId,
        loadingTablerow: isLoading,
        tableDataId: postId,
        showTable : loadTable
      
    }
    return (
      <TableContext.Provider value={context}>
        {props.children}
      </TableContext.Provider>
    )
}
export  default  TableContextProvider