

const Bookmark = ({bookmark,bookTime}) => {
    return (
        <div className='w-[411px]'>     
            <h2 className='text-2xl font-bold text-[#6047EC] bg-gray-200 py-5 px-12 
            rounded-lg'>Spent time on read : {bookTime} </h2>
            <div className='bg-gray-200 px-9 mt-6 py-7 rounded-lg'>
                <h2 className='text-2xl font-bold'>Bookmarked Blogs : {bookmark.length}</h2> 
                    {
                        bookmark.map(book=> <div className='bg-white p-5 rounded-lg mt-4 text-lg font-semibold' key={book.id}>{book.title}</div>)
                    }     
            </div>
        </div>
    );
};

export default Bookmark;