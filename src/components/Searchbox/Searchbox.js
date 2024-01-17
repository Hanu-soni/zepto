import React, { useState } from 'react';
import Chips from '../Chips/Chips';
import dataset from './data';

const Searchbox = (props) => {
  console.log(props.search);

  const [data, setData] = useState(dataset);
  const [chips, setChips] = useState([]);

  const handleItemClick = (selecteditem) => {
    // add item selected from box to chips
    console.log(chips);
    setChips([...chips, selecteditem]);

    // remove item selected from box 
    setData(data.filter((item) => item !== selecteditem));

    // props.setsearch("");
  };

  return (
    <div className='d-flex'>
      {chips.length !== 0 && <Chips data={chips} setdata={setChips} databox={data} setdatabox={setData} />}

      <div style={{ cursor: "pointer", overflow: "auto", width: "500px" }} className='d-flex justify-content-evenly flex-column gap-2 border border-dark'>

        {data
          .filter((item) => item.name.toLowerCase().includes(props.search.toLowerCase()))
          .map((item, index) => (
            <div
              style={{ height: "50px" }}
              key={index}
              className=" bg-light row"
              onClick={() => handleItemClick(item)}
            >
              <div className='col-2'>
                <img
                  style={{
                    width: '100px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '2px solid #fff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                  src={item.img}
                  className="img-fluid"
                  alt="img"
                />
              </div>

              <div className='col-4 fw-bold'>{item.name}</div>
              <div className='col-6'>{item.email}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Searchbox;
