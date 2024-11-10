import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({card}) => {
    const {bookId,bookName,author,image,tags,category,rating} =card;
    return (

        <section>
            <Link to={`/detail/${bookId}`}>
            <div className="card w-96 bg-base-100 shadow-xl border border-dotted border-gray-500">
                <div className=" h-[300px] pl-[40px]">
                    <div className=" mt-6 py-3  w-[300px] h-[290px] bg-gray-100 rounded-xl">
                    <figure><img className="h-[265px]" src={image} alt="Shoes" /></figure>
                    </div>
               
                </div>
         
         <div className="card-body ">
         <div className="flex gap-24 ">
                        {tags.map((tag, index) => (
                            <div key={index} className="rounded-2xl bg-green-100 text-green-500 text-lg font-bold text-center">{tag}</div>
                        ))}
                    </div>

        
         <h2 className="card-title">
        {bookName}
       
        </h2>
        <p className="ml-[-180px]">By :{author} </p>
        <div className="border-dotted border-b-2 border-gray-500"></div>
       <div className="flex justify-between">
      <div className="">{category}</div> 
      <div className="flex gap-2">{rating}
        <img src="https://i.ibb.co/10sDrZn/Vector.png" alt="" />
      </div>
    </div>
  </div>
</div>
    </Link>
        </section>
    );
};
Card.propTypes={
    card : PropTypes.object
}
export default Card;