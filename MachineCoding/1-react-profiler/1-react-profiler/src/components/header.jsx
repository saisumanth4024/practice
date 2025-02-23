import {Link} from "react-router-dom";
import {ShoppingCartState} from "../context/context";

const Header = () => {
  const {
    filterDispatch,
    filterState: {searchQuery},
    state: {cart},
  } = ShoppingCartState();

  return (
    <nav className="h-5 flex items-center justify-between">
      <h2 className="text-2xl font-mono">
        <Link to="/">RoadsideCoder Store</Link>
      </h2>
      <input
        className="p-2"
        type="text"
        placeholder="Search a Product..."
        value={searchQuery}
        onChange={(e) =>
          filterDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          })
        }
      />
      <Link to="/cart">
        <button className="px-4 py-2 bg-slate-500 text-white rounded-sm">
          Cart ({cart.length})
        </button>
      </Link>
    </nav>
  );
};

export default Header;
