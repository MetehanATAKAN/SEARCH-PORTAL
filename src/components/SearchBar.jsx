import React,{useState} from 'react'
import "../../src/App.css";
import {useDispatch,useSelector} from "react-redux";
import { searchInputValue } from '../redux/slices/SearchSlice';

const SearchBar=()=> {
    
    const [value, setvalue] = useState("");  
    const dispatch = useDispatch();
    const data = useSelector(state => state.search.filterData);
    const errorTextCounter = useSelector(state => state.search.errorTextCounter);
    
    const searchButton=()=>{  
        if(value!==""){
            dispatch(searchInputValue(value))
        }
        setvalue("");
    }
    return (
        <div className='search-bar'>
            
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
    )
}

export default SearchBar
