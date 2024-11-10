import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { saveInfo } from "./LocalStore";
import { saveReadBook } from "./LocalStore";
import { saveWishList } from "./LocalStore";


const CardDetail = () => {
    const infos =useLoaderData();
    const {bookId} =useParams();
    const idInt =parseInt(bookId);
    const info = infos.find(info=> info.bookId === idInt);
    console.log(info);

    const [hasRead, setHasRead] = useState(false);
  const [hasWishListed, setHasWishListed] = useState(false);

  const handleRead = () => {
    // saveInfo(idInt);
    saveReadBook(idInt);
    if (hasRead) {
      toast.warn("Read is already added. You can't add it again.");
    } else {
      toast.success("Read added");
      setHasRead(true);
      setHasWishListed(false);
    }
  };

  const handleWish = () => {
    // saveInfo(idInt);
    saveWishList(idInt);
    if (hasWishListed) {
      toast.warn("Wish-List is already added. You can't add it again.");
    } else if (hasRead) {
      toast.warn("You can't select Wish-List after selecting Read.");
    } else {
      toast.success("Wish-List added");
      setHasWishListed(true);
    }
  };


    return (
        <section className="mt-20 ml-[100px] flex gap-10 h-[500px] w-[1200px] ">
            {/* <h2>Card Details Here : {bookId}</h2> */}
            <div className="h-[470px] w-[600px] bg-gray-100 rounded-2xl">
                <img src={info.image} className="ml-16 mt-16 h-[400px] w-[400px]" alt="" />
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-7">{info.bookName}</h2>
                <p className="font-semibold text-lg mb-4">By : {info.author} </p>
                <div className="border-dotted border-b-2 border-gray-400 "></div>
                <p className="text-lg font-bold">{info.category}</p>
                <div className="border-dotted border-b-2 border-gray-400 mt-4"></div>
                <p className="mb-4"> <span className="text-lg font-bold">Review: </span>{info.review}</p>
                <div className="flex gap-2 mb-3">
                <span className="text-lg font-bold">Tags:</span><p className=" text-green-500 text-lg font-bold "> {info.tags.map((tag, index) => (
                   <span key={index}>
                      #{tag} {index !== info.tags.length - 1 && <>&nbsp;</>}
                        </span>
                         ))}</p>
                </div>
                <div className="border-dotted border-b-2 border-gray-400"></div>
                <p className="mb-2">Number of Pages : <span className="text-lg font-bold">{info.totalPages}</span> </p>
                <p className="mb-2">Publisher : <span className="text-lg font-bold">{info.publisher}</span></p>
                <p className="mb-2">Year of Publishing :<span className="text-lg font-bold">{info.yearOfPublishing}</span> </p>
                <p className="mb-2">Rating : <span className="text-lg font-bold">{info.rating}</span></p>
                 
                 <div className="flex gap-10 mt-4">


                 <button
            onClick={handleRead}
            className="btn text-lg font-bold border border-solid border-black"
          >
            Read
          </button>
          <button
            onClick={handleWish}
            className="btn text-lg font-bold bg-[#59C6D2] text-white"
          >
            Wish-List
          </button>


                    <ToastContainer />


                 </div>

            </div>
         
        </section>
    );
};

export default CardDetail;