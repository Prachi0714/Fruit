import React from 'react'

const Navbar = ({filterItem,menulist}) => {
  return (
    <>
    <div className='nav'>
     
        {
          menulist.map((curEle)=>{

            return(
              <button onClick={()=>filterItem(curEle)}>{curEle}</button>
            )

          })
        }
    </div>
    </>
    
  )
}

export default Navbar