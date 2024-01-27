import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-black shadow-md py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Hotel Booker</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center rounded-md text-white px-3 font-bold hover:bg-white hover:text-black"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center rounded-md text-white px-3 font-bold hover:bg-white hover:text-black"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-black px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
