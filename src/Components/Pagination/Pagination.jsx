import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Pagination.css';

function Pagination() {
    const [table, setTable] = useState();
 
    // pahle page  loading default
    const [currentpage, setcurrentpage] = useState(1)  ; 
    // ek page me kitna data show kr na hay
   const [rowPerPage, setrowPerPage] = useState(10);
//    ab iss me 10 show ho gya 
   const indexofLastItem = currentpage * rowPerPage;
   
//    frist item KA index
    const indexOfFristItem = indexofLastItem - rowPerPage;
  
    // ek page kitna iteam show hoga
    const currentItem = table?.users?.slice(indexOfFristItem,  indexofLastItem) ;

    // iss api ke ander rk total value hay jis ham divide kr dege ki rowperpage se
    const totalPages = Math.ceil(table?.total/rowPerPage)


    useEffect(() => {
     axios.get('https://dummyjson.com/users?limit=0')
     .then((response)=>{
        console.log(response);
        setTable(response?.data)
        
     })
    
     
    }, []);

    const hendlePrev = ()=>{
        setcurrentpage((prev)=>Math.max(prev-1, 1))
    };

    const hendelNext = ()=> {
        setcurrentpage((prev)=>Math.min(prev+1, totalPages)) 
    };

    const heandlePageclick =(pageNumber)=>{
        setcurrentpage(pageNumber)

    };


    
  return (
    <div>
        <div className="table">
            <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gander</th>
            </tr>
        </thead>
        <tbody>
            {currentItem?.map((value,index)=>(
                <tr key={index}>
                    <td>{value.firstName}</td>
                    <td>{value.email}</td>
                    <td>{value.gender}</td>

                </tr>
            ))}
        </tbody>
        </table>
          <div className="pagination">
            <button onCanPlay={hendlePrev} disabled={currentpage ===1}>prev</button>
            {Array.from({length:totalPages}, (_, index)=>(
                <button onClick={()=>heandlePageclick(index+1)} className={currentpage === index+1 ? 'active':""}>{index+1}</button>
            ))}
            <button onClick={hendelNext} disabled={currentpage === totalPages}>next</button>
          </div>
        </div>
    </div>
  )
}

export default Pagination