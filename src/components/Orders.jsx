import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export default function Orders({ orders, setTrackPackage, carts, setCarts }) {
  const navigate = useNavigate();
  const totalItems =
    orders?.reduce((total, order) => {
      const orderSum =
        order.cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;
      return total + orderSum;
    }, 0) || 0;
  const totalAmount =
    orders?.reduce((total, order) => total + order.total, 0) || 0;

  function handleAddToCart(product) {
    const cartItems = Array.isArray(carts) ? carts : [];
    const targetProduct = cartItems.find((cart) => cart.id === product.id);
    targetProduct
      ? setCarts((pre) =>
          (Array.isArray(pre) ? pre : []).map((item) =>
            item.id === product.id ? { ...item, quantity: item + 1 } : item,
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
  }

  function handleTrackPackage(item, order) {
    const orderDay = dayjs(order.orderDate);
    const arrivingDay = orderDay.add(order.selectedOption.days, "day");

    setTrackPackage({
      orderDate: order.orderDate, // ISO string
      arrivingDate: arrivingDay.toISOString(), // ISO string
      name: item.title,
      thumbnail: item.thumbnail,
      quantity: item.quantity,
      brand: item.brand,
    });
    navigate("/tracking");
  }

  return (
    <div className="p-10 max-w-5xl w-full mx-auto">
      <div className="flex items-center justify-between my-5">
        <h1 className="font-semibold text-xl sm:text-2xl ">Orders</h1>
        <div className="flex gap-3 items-center">
          <p className="text-base sm:text-lg font-semibold text-zinc-700 dark:text-zinc-300">
            {totalItems}
            {totalItems <= 1 ? " item" : " items"} |
          </p>
          <p className="text-base sm:text-lg font-bold">
            ${totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
      {orders?.length > 0 ? (
        orders.map((order) => {
          const formattedOrderDate = dayjs(order.orderDate).format("MMMM D");
          const arrivingDate = dayjs(order.orderDate)
            .add(order.selectedOption.days, "day")
            .format("dddd, MMMM DD");
          return (
            <div
              key={order.orderId}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl my-10 "
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4 border-b border-b-gray-200 dark:border-b-gray-800 p-5">
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-zinc-500">
                    Order Placed:
                  </span>
                  <span className="font-medium">{formattedOrderDate}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-zinc-500">
                    Total:
                  </span>
                  <span className="font-medium">${order.total.toFixed(2)}</span>
                </div>
                <div className="flex flex-col w-full sm:max-w-xs">
                  <span className="font-bold text-sm text-zinc-500">
                    Order ID:
                  </span>
                  <span className="font-medium truncate" title={order.orderId}>
                    {order.orderId}
                  </span>
                </div>
              </div>
              {order.cartItems?.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-10 px-5 sm:px-10 py-5"
                >
                  <div
                    className="w-24 h-full sm:w-40 sm:h-full
              rounded-2xl flex items-center justify-center bg-zinc-50 dark:bg-zinc-800/50"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <p className="font-semibold text-base sm:text-lg line-clamp-1">
                        {item.title}
                      </p>
                      <p className="font-medium text-sm sm:text-base">
                        Arrving on: {arrivingDate}
                      </p>
                      <p className="font-medium text-sm sm:text-base">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 my-4 w-full">
                      <button
                        className="border rounded-lg px-4 py-1.5 cursor-pointer bg-green-700 dark:bg-green-500 text-zinc-50 dark:text-zinc-900 duration-200 hover:bg-green-600  hover:text-zinc-100 dark:hover:bg-green-400 dark:hover:text-zinc-950 font-medium"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleTrackPackage(item, order)}
                        className="border rounded-lg px-4 py-1.5 cursor-pointer duration-200 hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-950 font-medium"
                      >
                        Track package
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })
      ) : (
        <p className="text-orange-500 dark:text-orange-500 text-lg sm:text-xl font-semibold my-10">
          You have no orders yet.
        </p>
      )}
    </div>
  );
}
