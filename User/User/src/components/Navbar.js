import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Style.css'
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('user');
  let user = null;

  if (storedUser) {
    try {
      user = JSON.parse(storedUser);
    } catch (e) {
      console.error('Failed to parse user from localStorage:', e);
    }
  }
  const firstName = user && user.firstName ? user.firstName : 'Guest';

  return (
    <div class="nav-main">
      <nav id="navbar-right" className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          {/* <div className="ml-5">
            <img src="../logo.png" className="lg:h-14 md:h-10 h-8" alt="" />
          </div> */}
          <a href="#" class="logo"><i class="fas fa-utensils"></i>food</a>

        </NavLink>

        <div id="nav-list" className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/Home">
            <p>Home</p>
          </NavLink>
          <NavLink to="/shop">
            <p>Shop</p>
          </NavLink>
          <NavLink to="/subscribe">
            <p>Subscribe & Save</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
          <NavLink>
            


<div class="flex items-center gap-4">
<div class="font-medium dark:text-black">
<h2>Welcome, {firstName}</h2>
        <div class="text-sm text-gray-500 dark:text-gray-400"><Link to='/page'>View Details</Link></div>
    </div>
</div>

          </NavLink>
        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
