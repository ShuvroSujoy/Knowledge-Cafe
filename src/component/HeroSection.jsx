import React, { useEffect, useState } from 'react';
import Product from './Product';
import Bookmark from './Bookmark';
import { toast } from 'react-toastify';

const HeroSection = () => {
   const [products, setProducts] =useState([])
   const [bookmark, setBookmark] =useState([])
   const [bookTime, setBookTime] =useState(0)
   useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setProducts(data));
   },[]);
  
//    bookmark Handler 
   const bookmarkHandle =(id)=>{
    const updateProducts = products.find(p => p.id ===id)
        if(updateProducts){
            if(!bookmark.find(p => p.id ===id)){
                setBookmark([...bookmark, updateProducts ])
            } 
            else toast("This post already exists!!")       
        }
   };
//    time Handler 
const timeHandler =(time)=>{
    setBookTime(bookTime + time)

}
    return (
        <div className='mt-8 md:flex md:mx-40  gap-6'>
            <div>
                {
                   products.map(product => <Product
                   key={product.id}
                   product={product}
                   bookmarkHandle={bookmarkHandle}
                   timeHandler={timeHandler}
                   ></Product>)
                }
            </div>
            <div>
                <Bookmark
                bookmark={bookmark}
                bookTime={bookTime}
                ></Bookmark>
            </div>
        </div>
    );
};

export default HeroSection;