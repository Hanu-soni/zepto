import React, { useState } from 'react'
import Searchbox from '../Searchbox/Searchbox';

const Search = () => {


    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
  return (
    <div style={{marginTop:"300px"}} className='d-flex justify-content-center flex-column align-items-center gap-2 '>
        <input
            style={{border:"10px solid transparent",borderBottom:"10px solid black"}}
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Search chip here"
            className=" fw-bold"
          />

          {/* Searchbox component -Whatever user searches if present in list
          will appear in this box */}
          {input && 
          <Searchbox search={input} setsearch={setInput}/>
          }
           
          
    </div>
  )
}

export default Search