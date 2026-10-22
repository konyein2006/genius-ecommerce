import { useParams, NavLink } from "react-router-dom";
import Product from "./Product";

export default function CategoryProducts({
  title,
  baseRoute,
  categoryChecker,
  products,
  carts,
  setCarts,
}) {
  const { category } = useParams();
  const sectionProducts = products?.filter(categoryChecker) || [];
  const distinctCategories = [
    ...new Set(sectionProducts.map((p) => p.category)),
  ];
  const filterProducts = category
    ? sectionProducts.filter(
        (product) =>
          product.category.split("-").pop() === category ||
          product.category.includes(category),
      )
    : sectionProducts;

  return (
    <div className="p-5 flex flex-col items-start justify-start mx-auto max-w-5xl w-full h-fit bg-white dark:bg-black">
      <h1 className=" font-extrabold font-stretch-75% text-2xl sm:text-3xl my-10">
        {title}
      </h1>
      {/* Container to restrict overflow */}
      <div className="w-full max-w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Explore the products
        </h1>
        <ul className="flex items-center sm:gap-1.5 my-8 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 w-fit max-w-full overflow-x-auto scrollbar-none">
          {/* "All" button */}
          <li
            className={`shrink-0 whitespace-nowrap py-1.5 px-3 rounded-xl hover:cursor-pointer text-sm sm:text-base transition-colors ${
              category
                ? ""
                : "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium"
            }`}
          >
            <NavLink to={baseRoute} className="flex items-center gap-1">
              All products
            </NavLink>
          </li>

          {/* Mapped category buttons */}
          {distinctCategories?.map((p, index) => {
            const subCategorySlug = p.split("-").pop();
            return (
              <li key={index} className="shrink-0 whitespace-nowrap">
                <NavLink
                  to={`${baseRoute}/${subCategorySlug}`}
                  className={({ isActive }) =>
                    `block py-1.5 px-3 rounded-xl capitalize cursor-pointer text-sm sm:text-base transition-colors ${
                      isActive
                        ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium"
                        : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    }`
                  }
                >
                  {subCategorySlug}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 mx-auto bg-white dark:bg-black">
        {filterProducts.map((product, index) => (
          <Product
            product={product}
            key={product.id || index}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
}
