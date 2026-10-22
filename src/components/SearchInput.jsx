import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function SearchInput({ handleSearch, products }) {
  const [searchText, setSearchText] = useState("");

  const ecommerceProducts = products?.filter(
    (product) =>
      product.category === "men-shirts" ||
      product.category === "mens-shoes" ||
      product.category === "mens-watches" ||
      product.category === "women-shirts" ||
      product.category === "womens-dresses" ||
      product.category === "women-jewellery" ||
      product.category === "women-bags" ||
      product.category === "tops" ||
      product.category === "womens-watches" ||
      product.category === "laptops" ||
      product.category === "mobile-accessories" ||
      product.category === "smartphones" ||
      product.category === "tablets" ||
      product.category === "beauty" ||
      product.category === "fragrances" ||
      product.category === "skin-care" ||
      product.category === "sunglasses" ||
      product.category === "furniture" ||
      product.category === "home-decoration" ||
      product.category === "sports-accessories",
  );

  const filterdProducts = searchText
    ? ecommerceProducts.filter(
        (product) =>
          product.title?.toLowerCase().includes(searchText.toLowerCase()) ||
          product.category?.toLowerCase().includes(searchText.toLowerCase()) ||
          product.brand?.toLowerCase().includes(searchText.toLowerCase()),
      )
    : [];

  const popularTerms = [
    "men",
    "women",
    "technology",
    "beauty",
    "decoration",
    "sport",
  ];

  function url(product) {
    const path =
      product === "men-shirts" ||
      product === "mens-shoes" ||
      product === "mens-watches"
        ? "men"
        : product === "women-shirts" ||
            product === "womens-dresses" ||
            product === "women-jewellery" ||
            product === "women-bags" ||
            product === "tops" ||
            product === "womens-watches"
          ? "women"
          : product === "laptops" ||
              product === "mobile-accessories" ||
              product === "smartphones" ||
              product === "tablets"
            ? "technology"
            : product === "beauty" ||
                product === "fragrances" ||
                product === "skin-care" ||
                product === "sunglasses"
              ? "beauty"
              : product === "furniture" || product === "home-decoration"
                ? "decoration"
                : product === "sports-accessories"
                  ? "sport"
                  : "";
    return path;
  }

  function handleInput(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-zinc-900 px-8 md:px-10 lg:px-10 pt-5 pb-2  gap-10 md:gap-0 transition-all duration-1000 ease-in animate-fadeIn">
      <div className="flex items-start gap-5 justify-between">
        <NavLink to="/" className="cursor-pointer hidden md:flex">
          <h1 className="font-bold text-3xl font-sans uppercase text-zinc-900 dark:text-zinc-100">
            Genius
          </h1>
        </NavLink>
        <div className="flex items-center relative flex-1 max-w-lg">
          <button className="h-9 w-9 rounded-full flex items-center justify-center absolute left-0 top-0 bottom-0 hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer">
            <CiSearch className="text-zinc-800 dark:text-zinc-100 text-xl md:text-2xl" />
          </button>
          <input
            onChange={handleInput}
            value={searchText}
            autoFocus
            type="text"
            placeholder="Search"
            className="bg-gray-100 dark:bg-gray-600 h-9 w-full pl-10 outline-none rounded-2xl font-semibold placeholder:text-zinc-600 dark:placeholder:text-zinc-300 text-zinc-900 dark:text-zinc-100"
          />
        </div>
        <button
          onClick={handleSearch}
          className="font-semibold text-lg cursor-pointer text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400"
        >
          Cancel
        </button>
      </div>
      <div className="my-10 flex flex-col gap-8 w-fit mx-auto ">
        <p className="font-semibold text-sm sm:text-base  text-gray-500 dark:text-gray-400 mt-5">
          {searchText ? "Search Results" : "Popular Search Terms"}
        </p>
        {searchText === "" ? (
          <ul className="flex flex-wrap gap-5 wrap-anywhere ">
            {popularTerms.map((term) => (
              <li
                key={term}
                className="bg-zinc-100 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-50 px-4 py-2 rounded-2xl font-bold cursor-pointer hover:scale-105"
              >
                <NavLink
                  to={`/${term}`}
                  onClick={handleSearch}
                  className="block"
                >
                  {term}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2">
            {filterdProducts.length > 0 ? (
              filterdProducts.map((product) => (
                <li
                  key={product.id}
                  className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  <NavLink
                    to={`/${url(product.category)}/${product.category.split("-").pop()}`}
                    onClick={handleSearch}
                    className="p-3 flex items-center justify-between w-full"
                  >
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1 max-w-[45%] w-fit">
                      {product.title}
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-zinc-600 dark:text-zinc-300 uppercase tracking-wide line-clamp-1">
                      {product.category}
                    </span>
                  </NavLink>
                </li>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No products found matching "{searchText}"
              </p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
