import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='w-screen h-20 flex justify-between items-center md:px-40 px-2 '>
                <h1 className='font-bold lg:text-[40px] text-2xl'>Knowledge Cafe</h1>
                <img className='w-12 h-12' src="/src/images/Ellipse 1.png" alt="" />
            </nav>
            <hr className='md:mx-40' />
        </div>
        
    );
};

export default Header;