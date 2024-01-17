import React from 'react'

const Chips = (props) => {
  return (
    <div  className='d-flex flex-lg-row justify-content-evenly   flex-wrap gap-4 ' style={{marginTop:"-200px",position:"relative" ,width:"100%"}}>
        { props.data.map((item, index) => (
                <div

                  key={index}
                  className="d-flex flex-row gap-1   "
                //    onClick={() => handleItemClick(item)}

                >
                  <span >{item.name}</span>
                  <span >{item.img}</span>
                  <span >X</span>
                </div>
              ))}
    </div>
  )
}

export default Chips