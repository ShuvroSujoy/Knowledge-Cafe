import React from 'react';

const Header = () => {
    return (
        <div >
            <div className='w-screen h-20 flex justify-between items-center md:px-40'>
                <h1 className='font-bold text-[40px]'>Knowledge Cafe</h1>
                <img src="/src/images/Ellipse 1.png" alt="" />
            </div>
            <hr className='mx-40' />
        </div>
        
    );
};

export default Header;