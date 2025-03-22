import React from 'react'
import "./Spinner.css";
const Spinner = () => {
    return (
        <div className='flex flex-row h-[100vh] justify-center items-center w-full'>
           <div> <span className='spinner'>

            </span>
            <p>Loading.....</p>
            </div>
        </div>

    )
}

export default Spinner
