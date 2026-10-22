import ProductsSummary from "./ProductsSummary";
import PaymentSummary from "./PaymentSummary";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({
  carts,
  setCarts,
  orders,
  setOrders,
  handleAddQuantity,
  handleSubtractQuantity,
  handleDeleteCart,
}) {
  const navigate = useNavigate();
  const deliveryOptions = [
    { days: 7, cost: 0 },
    { days: 3, cost: 3 },
    { days: 1, cost: 5 },
  ];
  const rawTotal =
    carts?.reduce((sum, cart) => sum + cart.price * cart.quantity, 0) || 0;

  const totalAmount = rawTotal.toFixed(2);
  const [showOptions, setShowOptions] = useState(false);

  const [selectedOption, setSelectedOption] = useState(deliveryOptions[0]);

  const deliveryCost =
    typeof selectedOption.cost === "number" ? selectedOption.cost : 0;
  const finalTotal =
    totalAmount > 0 ? (Number(totalAmount) + deliveryCost).toFixed(2) : 0;

  const cartItems = Array.isArray(carts) ? carts : [];

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  function handleSelectOption(option) {
    setSelectedOption(option);
    setShowOptions(false);
  }

  function handleCheckout() {
    if (carts.length === 0) return;
    setOrders([
      {
        orderId: crypto.randomUUID(),
        orderDate: new Date().toISOString(),
        total: Number(finalTotal),
        selectedOption,
        cartItems,
      },
      ...orders,
    ]);
    setCarts([]);
    navigate("/orders");
  }
  return (
    <div className="max-w-5xl min-h-dvh mx-auto lg:flex w-full">
      <ProductsSummary
        totalAmount={totalAmount}
        handleAddQuantity={handleAddQuantity}
        handleSubtractQuantity={handleSubtractQuantity}
        handleDeleteCart={handleDeleteCart}
        cartItems={cartItems}
        totalQuantity={totalQuantity}
      />
      <PaymentSummary
        totalAmount={totalAmount}
        deliveryOptions={deliveryOptions}
        selectedOption={selectedOption}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        handleSelectOption={handleSelectOption}
        finalTotal={finalTotal}
        handleCheckout={handleCheckout}
      />
    </div>
  );
}
