import React from 'react'

const Meeting_Filter = ({onFilterSelect})=>
{
    return ( 
        <>
            {/* Filtering meeting  */}
            <div className=" bg-gray-200 p-1 md:pt-[1vh]  md:mt-[1vh]">
            <h2 className="text-2xl text-center text-blue-500  font-bold p-[1vh] md:pt-[5.5vh] md:pb-[3vh]">Meeting Schedule</h2>
                <div className='flex justify-center  rounded-full bg-gray-400 p-2 shadow-md space-x-8 max-w-fit mx-auto '>
                    <button onClick={()=> onFilterSelect('yesterday')}className='bg-green-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer'>Yesterday</button>

                    <button onClick={()=>onFilterSelect('today')}className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">Today</button>
                    <button onClick={()=>onFilterSelect('today')}className='bg-green-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer'>Tomorrow</button>

                    <button onClick={()=>onFilterSelect('+2')}className='bg-green-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer'>+2</button>
                </div>
            </div>
        </>
    );
        
}

export default Meeting_Filter;