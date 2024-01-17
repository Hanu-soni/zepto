import React, { useState } from 'react'
import Chips from '../Chips/Chips';

const Searchbox = (props) => {
  console.log(props.search)
  const [data,setData]=useState([
    {
      name:"ajit",
      img:"abc",
      mail:"abc@gmail.com"
    },
    {
      name:"ajit",
      img:"abc",
      mail:"abc@gmail.com"
    },
    {
      name:"ajit",
      img:"abc",
      mail:"abc@gmail.com"
    },
    {
      name:"ajit",
      img:"abc",
      mail:"abc@gmail.com"
    },
    {
      name:"ajit",
      img:"abc",
      mail:"abc@gmail.com"
    }
  ])
  const [chips,setChips]=useState([]);
  const handleItemClick = (selecteditem) => {
    // add item selected from box to chips
    console.log(chips)
    setChips([...chips, selecteditem]); 
    // remove item selected from box 
    setData(data.filter((item) => item !== selecteditem));
    // props.setsearch("");
  };
  return (
    <div className='d-flex'>
        {
          chips.length!==0 &&
          <Chips  data={chips} setdata={setChips}/>
        }
        <div style={{cursor:"pointer"}} className='d-flex justify-content-evenly flex-column gap-2 border border-dark'>

       {data
              .filter((item) =>
                item.name.toLowerCase().includes(props.search.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="d-flex flex-row gap-2 justify-content-evenly border border-dark"
                   onClick={() => handleItemClick(item)}

                >
                  <span>{item.name}</span>
                  <span>{item.img}</span>
                  <span>{item.mail}</span>
                </div>
              ))}


        </div>

    </div>
    
  )
}

export default Searchbox