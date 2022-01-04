import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import "../App.css"
import orderıcon from "../orderıcon.png";
import {searchInputValue, NameAscending, NameDescending, YearAscending, YearDescending } from '../redux/slices/SearchSlice';


const ListPageResults=()=> {

    const [order, setorder] = useState(false);
    const [pageNumber, setpageNumber] = useState(1);
    const [value, setvalue] = useState("");
    const dispatch = useDispatch();
    const data = useSelector(state => state.search.filterData);
    const buttonNumber = useSelector(state => state.search.pageButtonsCount);
    const errorTextCounter = useSelector(state => state.search.errorTextCounter);

   
    
   const searchButton=()=>{       
    if(value!==""){
        dispatch(searchInputValue(value));
    }
    setpageNumber(1);
    setvalue("");
   } 


    const byOrder=(name)=>{
        if(name==="nameAscending") {
            dispatch(NameAscending());
        }
        else if(name==="nameDescending"){
            dispatch(NameDescending());
        }
        else if(name==="yearAscending"){
            dispatch(YearAscending());
        }
        else{
            dispatch(YearDescending());
        }     
    }
       
    return (
        <>
        <div className='search-bar-listpage'>
            <input 
            className={data.length!==0
                ?"search-input"
                :errorTextCounter>0 ?"search-input-error":"search-input"
                 } 
            type="text" 
            onChange={(e)=>setvalue(e.target.value)}
            />
            <button onClick={()=>searchButton()}>Search</button>         
        </div>
        {
            data.length!==0
            ?<div className='list-page-results'>          
        
            <div className='list-page-list'>
            <div className='order-by'>
                <img src={orderıcon} alt="orderıcon" width={26} height={24} />
                   <button onClick={()=>setorder(!order)}>Order By</button>
                   {
                       order===true?<div className='order-options'>
                           <button onClick={()=>byOrder("nameAscending")}>Name ascending</button> <br />
                           <button onClick={()=>byOrder("nameDescending")}>Name descending</button><br />
                           <button onClick={()=>byOrder("yearAscending")}>Year ascending</button><br />
                           <button onClick={()=>byOrder("yearDescending")}>Year descending</button>                   
                   </div>
                   :null
                   }
                   
               </div>
            {              
                data.slice((6*pageNumber-6),(6*pageNumber)).map((person,index)=>
                <div key={index} className='list'>       
                <div className='list-div'>
                    
                        <div className='search-left'>
                            <p>{`${person[4]} - ${person[5]}`}</p>
                            <p className='name-year'>{`${person[0]} - ${person[3].slice(6)}`}</p>
                        </div>
                        <div className='search-right'>
                           <p>E-mail: {person[2]}</p>                    
                        </div>
                </div> 
                </div>                            
                )              
            }
            
            <div className='list-page-button'>
                {
                    pageNumber===1
                    ?<button disabled={true} onClick={()=>setpageNumber(pageNumber-1)} className='previous-button'>Previous</button>
                    :<button  onClick={()=>setpageNumber(pageNumber-1)} className='previous-button'>Previous</button>
                }                           
              {
                  buttonNumber.map((num,index)=>
                  <button className={pageNumber-1===index?"active-button":"number-button"} onClick={()=>setpageNumber(index+1)} key={index}>{index+1}</button>)         
              }
              {
                  pageNumber===buttonNumber.length?
                  <button disabled={true} onClick={()=>setpageNumber(pageNumber+1)} className='next-button'>Next</button> 
                  :<button onClick={()=>setpageNumber(pageNumber+1)} className='next-button'>Next</button> 
              }
               
            </div>           
        </div>       
        </div>
            :errorTextCounter>0 ?
            <p className='error-text'>Error Text</p>
            :null
        }       
        </>
    )
}

export default ListPageResults 
