import { FaMinus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import dayjs from "dayjs";

export default function PaymentSummary({
  totalAmount,
  deliveryOptions,
  selectedOption,
  showOptions,
  setShowOptions,
  handleSelectOption,
  finalTotal,
  handleCheckout,
}) {
  return (
    <div className="flex flex-col gap-5 px-10 lg:px-5 my-5 lg:w-[30%] w-full">
      <h1 className="text-xl sm:text-2xl font-bold text-black dark:text-white my-5">
        Summary
      </h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-base sm:text-lg font-medium">
            Total products cost
          </p>
          <p className="text-base sm:text-lg font-medium">
            {totalAmount > 0 ? (
              `$${totalAmount}`
            ) : (
              <FaMinus className="text-sm" />
            )}
          </p>
        </div>
        <div className="flex justify-between items-center ">
          <p className="text-base sm:text-lg font-medium">Estimated Delivery</p>
          <div className="text-base sm:text-lg font-medium">
            {totalAmount > 0 ? (
              <div
                className={`flex items-center ${selectedOption.cost > 0 ? "gap-2 md:gap-4" : "gap-0.5"}`}
              >
                <p>
                  {selectedOption.cost > 0 ? `$${selectedOption.cost}` : "Free"}
                </p>
                <button onClick={() => setShowOptions(!showOptions)}>
                  {showOptions ? (
                    <IoIosArrowUp className="text-base cursor-pointer" />
                  ) : (
                    <IoIosArrowDown className="text-base cursor-pointer" />
                  )}
                </button>
              </div>
            ) : (
              <FaMinus className="text-sm" />
            )}
          </div>
        </div>
        <div
          className={`flex flex-col gap-1 border rounded-lg border-gray-300 dark:border-gray-800 w-full  ${showOptions ? "block" : "hidden"}`}
        >
          {deliveryOptions.map((option, index) => {
            const calculateDate = dayjs()
              .add(option.days, "day")
              .format("dddd, MMMM D");
            return (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                className={`flex items-center justify-between hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 cursor-pointer`}
              >
                <p className="text-sm font-medium">
                  {calculateDate} ({option.days}{" "}
                  {option.days === 1 ? "day" : "days"})
                </p>
                <p className="font-bold">
                  {option.cost === 0 ? "Free" : `$${option.cost}`}
                </p>
              </button>
            );
          })}
        </div>
        <div className="flex justify-between items-center border-t border-t-gray-300 pb-3 dark:border-t-gray-800">
          <p className="text-base sm:text-lg font-medium">Total</p>
          <p className="text-base sm:text-lg font-bold">
            {totalAmount > 0 ? (
              `$${finalTotal}`
            ) : (
              <FaMinus className="text-sm" />
            )}
          </p>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        className={`max-w-xl w-full rounded-2xl py-3 mx-auto my-5 font-bold ${totalAmount > 0 ? "bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 cursor-pointer hover:scale-105 " : "bg-zinc-200 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-600"}`}
      >
        Go to Checkout
      </button>
    </div>
  );
}
