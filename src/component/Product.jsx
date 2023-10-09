import React from 'react';
const Product = ({product, bookmarkHandle,timeHandler}) => {
    const {title,cover_image,author_image,author_name, date,time,tags } =product; 
    return (
        <div className='mb-10 pb-10'>
            <img  src={cover_image} alt="" />
            <div className='mt-7 mb-5 flex justify-between items-center '>
                <div className='flex'>
                    <img className='w-12 h-12 rounded-full mr-5' src={author_image} alt="" />
                    <p>
                        <span className='text-2xl font-bold'>{author_name}</span><br />
                        <span className='text-base text-gray-500 font-semibold'>{date}</span>
                    </p>
                </div>
                <div>
                    <p className='flex gap-1 text-gray-600 font-semibold'>{time} min read <span onClick={()=>bookmarkHandle(product.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg></span>
                    </p>
                </div>
            </div>
            <h1 className='text-[40px] font-bold'>{title}</h1>
            <p className='flex gap-3 text-gray-600 text-xl my-4 font-semibold'><span>#{tags[0]}</span><span>#{tags[1]}</span>
            </p>
            <a onClick={()=>timeHandler(product.time)} className='text-[#6047EC] text-xl font-semibold underline ' href="#">Mark as read</a>
        </div>
    );
};

export default Product;