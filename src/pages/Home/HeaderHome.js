import React from 'react';
import {RocketDirect,DropDownHome} from "../../assets/svg/svg"
const HeaderHome = () => {
    return (
        <>  
        <div className='fixed bg-white' style={{zIndex:1,width:"100%",height:"50px"}}>
            <div className='flex gap-x-[230px] '>
                    <button className='flex'>
                        <img className='w-[120px]' alt="instagram" src='/i.png'></img>
                        <div className='self-center'>
                            <DropDownHome/>
                        </div>
                    </button>

                    <div className="justify-end self-center">
                        <RocketDirect/>
                    </div>
               
            </div>
        </div>
            
    
        </>
    );
};

export default HeaderHome;