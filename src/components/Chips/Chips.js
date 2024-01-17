import React from 'react';

const Chips = (props) => {
  const handleChipRemove = (chip) => {
    props.setdata(props.data.filter((c) => c !== chip));
    props.setdatabox([...props.databox, chip]);
  };

  return (
    <div className='d-flex flex-lg-row justify-content-evenly flex-wrap gap-4' style={{ marginTop: "-200px", position: "relative", width: "100%" }}>
      {props.data.map((item, index) => (
        <div
          key={index}
          className="d-flex flex-row gap-1"
        // onClick={() => handleItemClick(item)}
        >
          <div className='col-4'>
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

          <div className='col-6 fw-bold'>{item.name}</div>

          <div className='col-2'>
            <button
              onClick={() => handleChipRemove(item)}
              className='btn btn-primary text-white'>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chips;
