import dayjs from "dayjs";

export default function Tracking({ trackPackage }) {
  function calculateProgress() {
    const orderDate = dayjs(trackPackage.orderDate);
    const arrivingDate = dayjs(trackPackage.arrivingDate);
    const now = dayjs();

    const totalDuration = arrivingDate.diff(orderDate, "millisecond");
    const elapsedDuration = now.diff(orderDate, "millisecond");

    if (totalDuration <= 0) return 100;

    const percentage = (elapsedDuration / totalDuration) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  }

  const progressPercentage = calculateProgress();

  return (
    <div className="py-5 px-8 sm:py-10 sm:px-16 max-w-4xl md:mx-auto w-full flex flex-col gap-15 sm:gap-10 border border-gray-200 dark:border-gray-800 rounded-2xl my-10">
      <div className="grid middle:grid-cols-2 gap-5 md:gap-8">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-xl sm:text-base md:text-lg">
            Arriving on{" "}
            {dayjs(trackPackage.arrivingDate).format("dddd, MMMM D")}
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            {trackPackage.name}
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Quantity: {trackPackage.quantity}
          </p>
        </div>
        <div
          className="w-full h-full
              rounded-2xl flex items-center justify-center bg-zinc-50 dark:bg-zinc-800/50"
        >
          <img
            src={trackPackage.thumbnail}
            alt={trackPackage.name}
            className="max-w-full max-h-full object-contain drop-shadow-md"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 my-5">
        <ul className="flex justify-between text-sm sm:text-base md:text-lg font-semibold">
          <li
            className={
              progressPercentage > 0 && progressPercentage <= 49
                ? "text-orange-400 dark:text-orange-500"
                : ""
            }
          >
            Preparing
          </li>
          <li
            className={
              progressPercentage > 49 && progressPercentage <= 99
                ? "text-orange-400 dark:text-orange-500"
                : ""
            }
          >
            Shipped
          </li>
          <li
            className={
              progressPercentage === 100
                ? "text-orange-400 dark:text-orange-500"
                : ""
            }
          >
            Delivered
          </li>
        </ul>
        <div className="bg-gray-200 dark:bg-gray-700 h-5 w-full rounded-3xl overflow-hidden">
          {/* Dynamic Fill Bar */}
          <div
            className="bg-green-400 dark:bg-green-500 h-full rounded-3xl transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
