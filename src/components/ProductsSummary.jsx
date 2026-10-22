import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function ProductsSummary({
  cartItems,
  handleAddQuantity,
  handleSubtractQuantity,
  handleDeleteCart,
  totalAmount,
  totalQuantity,
}) {
  return (
    <div className="px-10 lg:px-5 my-5 w-full lg:w-[70%]">
      <div className="flex items-center justify-between my-5">
        <h1 className="font-semibold text-xl sm:text-2xl ">Bag</h1>
        <div className="flex gap-3 items-center">
          <p className="text-base sm:text-lg font-semibold text-zinc-700 dark:text-zinc-300">
            {totalQuantity}
            {totalQuantity <= 1 ? " item" : " items"} |
          </p>
          <p className="text-base sm:text-lg font-bold">${totalAmount}</p>
        </div>
      </div>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((cart) => (
            <li className="flex gap-3 sm:gap-5 my-10" key={cart.id}>
              <div
                className="w-24 h-full sm:w-40 sm:h-full
              rounded-2xl flex items-center justify-center bg-zinc-50 dark:bg-zinc-800/50"
              >
                <img
                  src={cart.thumbnail}
                  alt={cart.title}
                  className="max-w-full max-h-full object-contain drop-shadow-md"
                />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 flex-1 px-3">
                <p className="font-bold text-base sm:text-lg line-clamp-1">
                  {cart.title}
                </p>
                <p className="text-green-500 dark:text-green-400 font-bold text-sm sm:text-base">
                  {cart.brand}
                </p>
                <p className="line-clamp-2">{cart.description}</p>
                <div className="flex  justify-between mt-1">
                  <p className="font-semibold text-lg sm:text-xl">
                    $ {(cart.price * cart.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3 shadow shadow-zinc-400 dark:shadow-zinc-700 border border-gray-300 dark:border-gray-800 w-auto rounded-3xl">
                    <button
                      className="h-6 sm:h-8 w-6 sm:w-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
                      onClick={() => {
                        cart.quantity === 1
                          ? handleDeleteCart(cart.id)
                          : handleSubtractQuantity(cart.id);
                      }}
                    >
                      {cart.quantity === 1 ? (
                        <MdDelete
                          className={`text-base sm:text-lg  text-zinc-950 dark:text-zinc-50`}
                        />
                      ) : (
                        <FaMinus
                          className={`text-xs sm:text-sm  text-zinc-950 dark:text-zinc-50`}
                        />
                      )}
                    </button>
                    <p>{cart.quantity}</p>
                    <button
                      className="h-6 sm:h-8 w-6 sm:w-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
                      onClick={() => handleAddQuantity(cart.id)}
                    >
                      <FaPlus
                        className={`text-xs sm:text-sm  text-zinc-950 dark:text-zinc-50`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-orange-500 dark:text-orange-500 text-lg sm:text-xl font-semibold my-10">
            There are no items in your bag.
          </p>
        )}
      </ul>
    </div>
  );
}
