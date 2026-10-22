import { NavLink } from "react-router-dom";

export default function CategoriesList() {
  return (
    <div className="grid sm:grid-cols-4 gap-3 sm:gap-3 md:gap-5 lg:gap-8 my-20 pl-10 sm:p-0 mr-auto sm:mx-auto">
      <div>
        <h2
          className="text-xl font-semibold text-zinc-950 dark:text-zinc-200 mb-5 cursor-pointer hover:scale-105
          "
        >
          <NavLink to="/men">Men</NavLink>
        </h2>
        <ul className="text-base text-zinc-500 dark:text-zinc-400 hidden sm:block">
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/men/shirts">Mens Shirts</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/men/shoes">Mens Shoes</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/men/watches">Mens Watches</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h2
          className="text-xl font-semibold text-zinc-950 dark:text-zinc-200 mb-5 cursor-pointer hover:scale-105
          "
        >
          <NavLink to="/women">Women</NavLink>
        </h2>
        <ul className="text-base text-zinc-500 hidden sm:block">
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/women/bags">Womens Bags</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/women/dresses">Womens Dresses</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/women/jewellery">Womens Jewellery</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/women/shoes">Womens Shoes</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/women/watches">Womens Watches</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/women/tops">Tops Dress</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h2
          className="text-xl font-semibold text-zinc-950 dark:text-zinc-200 mb-5 cursor-pointer hover:scale-105
          "
        >
          <NavLink to="/technology">Technology</NavLink>
        </h2>
        <ul className="text-base text-zinc-500 hidden sm:block">
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/technology/laptops">Laptops</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/technology/smartphones">Smartphones</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/technology/tablets">Tablets</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/technology/assessories">Mobile Accessories</NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block">
        <h2
          className="text-xl font-semibold text-zinc-950 dark:text-zinc-200 mb-5
          "
        >
          Others
        </h2>
        <ul className="text-base text-zinc-500 hidden sm:block">
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/beauty/fragrances">Fragraces</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/beauty/care">Skin Care</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/beauty/sunglasses">Sunglasses</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/decoration/furniture">Furniture</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/decoration/decoration">Home Decoration</NavLink>
          </li>
          <li className="hover:scale-105 hover:underline cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100">
            <NavLink to="/sport">Sports Assessories</NavLink>
          </li>
        </ul>
      </div>
      <h2
        className="text-xl font-semibold text-zinc-950 dark:text-zinc-200 mb-5 cursor-pointer hover:scale-105
         sm:hidden "
      >
        <NavLink to="/beauty">Beauty</NavLink>
      </h2>

      <h2
        className="text-xl font-semibold text-zinc-950 dark:text-zinc-200 mb-5 cursor-pointer hover:scale-105
          sm:hidden "
      >
        <NavLink to="/decoration">Decoration</NavLink>
      </h2>
      <h2
        className="text-xl font-semibold text-zinc-950 dark:text-zinc-200 mb-5 cursor-pointer hover:scale-105
          sm:hidden "
      >
        <NavLink to="/sport">Sport</NavLink>
      </h2>
    </div>
  );
}
