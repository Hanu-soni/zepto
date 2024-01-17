import React, { useState } from 'react'
import Searchbox from '../Searchbox/Searchbox';

const Search = () => {


    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
  return (
    <div style={{marginTop:"400px"}} className='d-flex justify-content-center flex-column align-items-center gap-2 '>
         <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Search chip here"
            className="border border-dark fw-bold"
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