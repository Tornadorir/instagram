import HeaderHome from 'pages/Home/HeaderHome';
import React from 'react';

const Story = () => {

    return (
        <>
       
            <div className='container flex' >
                <div className='story-container flex-col justify-center w-20 mt-5 ml-5' style={{textAlignLast:"center"}}>
                        <div className=' relative border-red-800 border-[2px] w-20 h-20 rounded-[100%]'>
                            <span className='absolute left-[5px] top-[5px] border-gray-400 border-[1px] w-[65px] h-[65px] rounded-[100%]'>
                                <img src="" className='relative'></img>
                                <button className='absolute bg-blue-500 w-4 h-4 text-white rounded-[100%] text-xs top-11 left-12 border-white border-1'>+</button>
                                {/* <span className="text-blue-100 bg-blue-600 text-xs mr-2 rounded-[100%] p-[1.5px]">+</span> */}
                            </span>
                        </div>
                        <div>
                            <p className='text-xs mt-1'>your story</p>
                        </div>
                </div>
                {/* map */}
                <div className='story-container flex-col justify-center w-20 m-5' style={{textAlignLast:"center"}}>
                        <div className=' relative border-red-800 border-[2px] w-20 h-20 rounded-[100%]'>
                            <span className='absolute left-[5px] top-[5px] border-gray-400 border-[1px] w-[65px] h-[65px] rounded-[100%]'>
                                <img src="" className=''></img>
                            </span>
                        </div>
                        <div>
                            <p className='text-xs mt-1'>mahsa</p>
                        </div>
                </div>
            </div>
                
        </>
    );
};

export default Story;