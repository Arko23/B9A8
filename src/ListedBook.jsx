import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {  getStoredReadBooks, getStoredWishList  } from "./component/LocalStore";
import { Link } from "react-router-dom";
// , removeReadBook, removeWishList
// getStoredInfo,
const ListedBook = () => {

   
    const info =useLoaderData();
    const[readable,setreadable]=useState([]);
    const[wishable,setwishable]=useState([]);

    useEffect(()=>{
         const storedReadBooks =getStoredReadBooks();
         if(info.length>0)
         {
            const RB=[];
            for(const bookId of storedReadBooks){
                const infos =info.find(infos=>infos.bookId===bookId);
                if(infos){
                    RB.push(infos);
                }
            }
            setreadable(RB);
         }
    },[info])

    useEffect(()=>{
        const storedWishList =getStoredWishList();
        if(info.length>0)
        {
           const WB=[];
           for(const bookId of storedWishList){
               const infos =info.find(infos=>infos.bookId===bookId);
               if(infos){
                   WB.push(infos);
               }
           }
           setwishable(WB);
        }
   },[info])
    
 

 


    return (
        <div>
            {/* <h2 className="text-3xl">Listed Books : {listedbook.length}</h2> */}
  
            <div className="bg-[#1313130D] rounded-2xl text-xl font-bold mt-10 h-[70px] w-[1300px] mx-auto border border-solid">
                <p className="text-center mt-4">BOOKS</p>
                
            </div>
            <section className="mx-auto ml-14 mt-10">
                <div className="text-center">
                <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1 text-white font-bold bg-[#23BE0A]">Sort By</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Rating</a></li>
    <li><a>Number of Pages</a></li>
    <li><a >Published Year</a></li>
  </ul>
</div>
                </div>
            <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read-List" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  { readable.map((book) => (
        <div key={book.id}>
            <section className="flex gap-5 mb-10 border border-dashed border-gray-600 rounded-xl w-[800px] h-[200px]">
            <div className="mt-4">
                <img src={book.image} alt="" />
            </div>
            <div>
          <h3 className="text-xl font-bold">{book.bookName}</h3>
          <p>By: {book.author}</p>
          {/* <span>Tag : </span> */}
          <div className="flex gap-7">
                    <span>Tags: </span>
                    {book.tags.map((tag, index) => (
                        
                        <span key={index} className="tag text-green-500">
                            #{tag}
                        </span>
                        
                    ))}
                    <img src="https://i.ibb.co/gTtFNR8/Frame-1.png" alt="" />
                    <p>Year of Publishing : {book.yearOfPublishing} </p>
                </div>
                <div className="flex gap-4 mt-3">
                <img src="https://i.ibb.co/ykSxtnt/Frame.png" alt="" />
                    <p className="font-semibold"> Publisher :{book.publisher} </p>
                    <img src="https://i.ibb.co/rFGsZkN/Frame-2.png" alt="" />
                    <p className="font-semibold">Pages :{book.totalPages} </p>
                </div>

                 <div className="flex gap-5">
                <div className="h-[25px] w-[170px] bg-blue-100 mt-5 flex gap-3 rounded-3xl text-blue-700 font-semibold ">
                    <span>Category:</span>
                    <p > {book.category}</p>        
          </div>
          <h2 className=" rounded-3xl mt-5 h-[25px] w-[120px] bg-yellow-100 text-yellow-400 font-semibold">Rating : {book.rating}</h2>
          <Link to={`/detail/${book.bookId}`} className="btn bg-green-500 text-white rounded-3xl mt-2">View Details</Link>
         
          </div>
          </div>
          </section>
          </div>
      ))}
  </div>
 

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish-List" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  { wishable.map((book) => (
        <div key={book.id}>
            <section className="flex gap-5 mb-10 border border-dashed border-gray-600 rounded-xl w-[800px] h-[200px]">
            <div className="mt-4">
                <img src={book.image} alt="" />
            </div>
            <div>
          <h3 className="text-xl font-bold">{book.bookName}</h3>
          <p>By: {book.author}</p>
          {/* <span>Tag : </span> */}
          <div className="flex gap-7">
                    <span>Tags: </span>
                    {book.tags.map((tag, index) => (
                        
                        <span key={index} className="tag text-green-500">
                            #{tag}
                        </span>
                        
                    ))}
                    <img src="https://i.ibb.co/gTtFNR8/Frame-1.png" alt="" />
                    <p>Year of Publishing : {book.yearOfPublishing} </p>
                </div>
                <div className="flex gap-4 mt-3">
                <img src="https://i.ibb.co/ykSxtnt/Frame.png" alt="" />
                    <p className="font-semibold"> Publisher :{book.publisher} </p>
                    <img src="https://i.ibb.co/rFGsZkN/Frame-2.png" alt="" />
                    <p className="font-semibold">Pages :{book.totalPages} </p>
                </div>

                 <div className="flex gap-5">
                <div className="h-[25px] w-[170px] bg-blue-100 mt-5 flex gap-3 rounded-3xl text-blue-700 font-semibold ">
                    <span>Category:</span>
                    <p > {book.category}</p>        
          </div>
          <h2 className=" rounded-3xl mt-5 h-[25px] w-[120px] bg-yellow-100 text-yellow-400 font-semibold">Rating : {book.rating}</h2>
          <Link to={`/detail/${book.bookId}`} className="btn bg-green-500 text-white rounded-3xl mt-2">View Details</Link>
          
          </div>
          </div>
          </section>
          </div>
      ))}
  </div>

</div>
</section>
        </div>
    );
};

export default ListedBook;