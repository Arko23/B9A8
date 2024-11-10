import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
    
    <li className="text-xl hover:text-green-500"><NavLink to="/" className={({ isActive }) => isActive ? "text-green-500 border-4 border-solid border-green-500 " : ""} >Home</NavLink></li>
    <li className="text-xl  hover:text-green-500"><NavLink to="/list" className={({ isActive }) => isActive ? "text-green-500 border-4 border-solid border-green-500" : ""}  >Listed Books</NavLink></li>
    <li className="text-xl  hover:text-green-500"><NavLink to="/page" className={({ isActive }) => isActive ? "text-green-500 border-4 border-solid border-green-500" : ""} >Pages to Read</NavLink></li>
    <li className="text-xl  hover:text-green-500"><NavLink to="/subs" className={({ isActive }) => isActive ? "text-green-500 border-4 border-solid border-green-500" : ""} >Subscription</NavLink></li>
    <li className="text-xl  hover:text-green-500"><NavLink to="/com" className={({ isActive }) => isActive ? "text-green-500 border-4 border-solid border-green-500" : ""} >Readers Forum</NavLink></li>

    </>
    
    return (
       <section>
      
    
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl font-bold">Book <span className="text-4xl font-bold text-[#23BE0A]">Fever</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 ">
        {links}
    </ul>
  </div>
  
  <div className="navbar-end gap-10">
    <a className="btn text-xl bg-[#23BE0A] text-white">Sign-In</a>
    <a className="btn text-xl text-white bg-[#59C6D2]">Sign-UP</a>
  </div>
</div>
       </section>
    );
};

export default Header;