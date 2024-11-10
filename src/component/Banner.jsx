import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
     <section className="mx-auto w-[1200px] h-[650px] mt-16 rounded-2xl">
        <div className="hero min-h-screen bg-base-200 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <div className="ml-[30px]  h-[400px] w-[400px]">
    <img src="https://i.ibb.co/Pzf7CY0/pngwing-1.png" className="contain" />
    </div>
    <div>
      <h1 className="text-6xl font-bold ml-[80px] mb-10">Books to  Make your Day Better !</h1>
      <NavLink to="/list"  >
      <button className="btn ml-[80px] bg-green-500 text-white font-semibold text-xl">View The List</button>
      </NavLink>
    </div>
  </div>
</div>
     </section>
    );
};

export default Banner;