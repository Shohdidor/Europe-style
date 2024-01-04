import React from 'react'

function Card( { span , h1 , p1 , h2 , p2 , h3 , p3 ,  h4 , p4 ,  h5 , p5 , h6 , p6 , img1 , img2, img3, img4, img5 } ) {
  return (
    <div className='text-center sm:text-left'>
        <div className='mb-[5px] sm:w-[30%] sm:mt-[80px] sm:m-auto sm:mb-[40px]'>
            <span className='text-[15px] text-black dark:text-white font-semibold'>
                {span}
            </span>
            <h1 className='dark:text-sky-500 text-black font-black text-[24px]'>
                {h1}
            </h1>
            <p className='dark:text-gray-600 text-black font-mono'>
                {p1}
            </p>
        </div>
        <div className='mb-[20px] sm:flex sm:ml-[155px] sm:gap-[100px] sm:w-[80%]'>
            <div>
            <img src={img1} alt="error" className='m-auto' />
            <h1 className='dark:text-sky-500 text-black font-black text-[24px]'> {h2} </h1>
            <p className='dark:text-gray-600 text-black font-mono mb-[20px]'> {p2} </p>
            </div>
            <div>
            <img src={img2} alt="error" className='m-auto' />
            <h1 className='dark:text-sky-500 text-black font-black text-[24px]'> {h3} </h1>
            <p className='dark:text-gray-600 text-black font-mono'> {p3} </p>
            </div>
        </div>
        <div className='sm:flex sm:p-[40px] sm:gap-[100px]'>
            <div>
            <img src={img3} alt="error" className='m-auto'/>
            <h1 className='dark:text-sky-500 text-black font-black text-[24px]'> {h4} </h1>
            <p className='dark:text-gray-600 text-black font-mono mb-[24px]'> {p4} </p>
            </div>
            <div>
            <img src={img4} alt="error" className='m-auto' />
            <h1 className='dark:text-sky-500 text-black font-black text-[24px]'> {h5} </h1>
            <p className='dark:text-gray-600 text-black font-mono mb-[24px]'> {p5} </p>
            </div>
            <div>
            <img src={img5} alt="error" className='m-auto' />
            <h1 className='dark:text-sky-500 text-black font-black text-[24px]'> {h6} </h1>
            <p className='dark:text-gray-600 text-black font-mono'> {p6} </p>
            </div>
        </div>
    </div>
  )
}

export default Card


function Card2( { span , h1 , p1 , h2 , p2 , h3 , p3 ,  h4 , p4 ,  h5 , p5 , h6 , p6 , img1 , img2, img3, img4, img5 } ) {
    return (
      <div className='text-center sm:text-left sm:mt-[400px] sm:ml-[-150px]'>
          <div className='mb-[5px] sm:w-[50%] sm:mt-[80px] sm:m-auto sm:mb-[40px]'>
              <span className='text-[15px] text-black dark:text-white font-semibold'>
                  {span}
              </span>
              <h1 className='dark:text-sky-500 text-black font-black text-[24px] sm:text-[40px]'>
                  {h1}
              </h1>
              <p className='dark:text-white text-black font-mono'>
                  {p1}
              </p>
          </div>
          <div className='mb-[20px] sm:flex sm:ml-[155px] sm:mt-[-150px] sm:gap-[100px] sm:w-[100%]'>
              <div>
              <img src={img1} alt="error" className='m-auto' />
              <img src={img2} alt="error" className='m-auto' />
              <img src={img3} alt="error" className='m-auto'/>
              </div>
              <div>
              </div>
          </div>
        
        
        </div>
    )
  }
  
  export { Card2 }