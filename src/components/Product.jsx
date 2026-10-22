import { useEffect, useState } from "react";
import RatingIcons from "../utils/RatingIcons";
import { IoMdCheckmark } from "react-icons/io";

export default function Product({ product, setCarts, carts }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    let timer;
    if (added) {
      timer = setTimeout(() => {
        setAdded(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [added]);

  function handleAddProduct(id) {
    const cartItems = Array.isArray(carts) ? carts : [];
    const targetProduct = cartItems.find((cart) => cart.id === id);
    targetProduct
      ? setCarts((pre) =>
          (Array.isArray(pre) ? pre : []).map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        )
      : setCarts([
          {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: 1,
            brand: product.brand,
            thumbnail: product.thumbnail,
          },
          ...cartItems,
        ]);
    setAdded(true);
  }

  return (
    <div className="flex flex-col  ">
      <div
        className="w-full h-auto sm:w-full sm:h-auto
              rounded-2xl flex items-center justify-center bg-zinc-50 dark:bg-zinc-800/50
            "
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-w-full max-h-full object-contain drop-shadow-md"
        />
      </div>
      <div className="flex flex-col gap-1 my-5">
        <p className="text-green-500 dark:text-green-400 font-bold text-sm">
          {product.brand}
        </p>
        <p className="text-base font-medium">{product.title}</p>
        <p className="text-lg font-semibold">$ {product.price}</p>
        <div className="flex items-center gap-2">
          Rating: <RatingIcons rating={product.rating} />
        </div>
        <button
          className={`border my-3 w-fit px-3 py-2 font-semibold duration-200 rounded-3xl cursor-pointer  ${added ? "text-green-400 dark:text-green-400 font-semibold " : "hover:bg-yellow-500 dark:hover:bg-yellow-400 hover:text-zinc-100 dark:hover:text-zinc-900"}`}
          onClick={() => handleAddProduct(product.id)}
        >
          {!added ? (
            "Add product"
          ) : (
            <div className="flex items-center gap-2">
              <IoMdCheckmark className="text-lg" />
              <p>Added Product</p>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
