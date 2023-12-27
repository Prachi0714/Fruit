import React from 'react'

const Menucard = ({menudata}) => {
    console.log(menudata);
  return (
    <section className='section'>
    
        {
            menudata.map((currEle) =>{
                return(
                <>
                
                    <div className='card-top'>
                    <div className='card-main'>
                       <div className='card-id'>{currEle.id}</div>
                       <div className='card-category'>Category : {currEle.category}</div>
                       <img src = {currEle.image} alt = "image" width= "100px" height="100px"/>
                       <div className='card-title'>Title : {currEle.title}</div>
                       <div className='card-description'>Description: {currEle.description}</div>
                       <div className='card-price'>Price : Rs: {currEle.price}/-</div>
                     
                       <button className='card-btn'>Read More</button>
                   </div>
                   </div>
              
                   </>
                )
            })
        }
      
    </section>
  )
}

export default Menucard;