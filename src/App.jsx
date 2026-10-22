import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import CategoryProducts from "./components/CategoryProducts";
import SearchInput from "./components/SearchInput";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Tracking from "./components/Tracking";

function App() {
  const [theme, setTheme] = useState(() => {
    const getTheme = JSON.parse(localStorage.getItem("genius-ecommerce-theme"));
    const isDark =
      getTheme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDark === "dark") {
      document.documentElement.classList.add("dark");
      return "dark";
    } else {
      document.documentElement.classList.remove("dark");
      return "light";
    }
  });
  const [products, setProducts] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("genius-ecommerce-carts")) || [],
  );
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("genius-ecommerce-orders")) || [],
  );
  const [trackPackage, setTrackPackage] = useState({});

  useEffect(() => {
    localStorage.setItem("genius-ecommerce-carts", JSON.stringify(carts));
  }, [carts]);

  useEffect(() => {
    localStorage.setItem("genius-ecommerce-orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (isSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearch]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=194");
      if (!res) return;
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProductsData();
  }, []);

  function handleAddQuantity(id) {
    setCarts((pre) =>
      pre.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart,
      ),
    );
  }

  function handleSubtractQuantity(id) {
    setCarts((pre) =>
      pre.map((cart) =>
        cart.id === id
          ? { ...cart, quantity: cart.quantity > 0 && cart.quantity-- }
          : cart,
      ),
    );
  }

  function handleDeleteCart(id) {
    setCarts((pre) => pre.filter((cart) => cart.id !== id));
  }

  function handleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("genius-ecommerce-theme", JSON.stringify(nextTheme));

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function handleSearch() {
    setIsSearch(!isSearch);
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen ease-in-out duration-100 flex flex-col">
      <Navbar
        handleTheme={handleTheme}
        theme={theme}
        handleSearch={handleSearch}
        carts={carts}
      />
      {isSearch && (
        <SearchInput handleSearch={handleSearch} products={products} />
      )}
      <main className="grow flex flex-col">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/men"
            element={
              <CategoryProducts
                title={"Men"}
                baseRoute="/men"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("men") &&
                  !p.category?.toLowerCase().includes("women")
                }
              />
            }
          />
          <Route
            path="/men/:category"
            element={
              <CategoryProducts
                title={"Men"}
                baseRoute="/men"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("men") &&
                  !p.category?.toLowerCase().includes("women")
                }
              />
            }
          />
          // Women
          <Route
            path="/women"
            element={
              <CategoryProducts
                title={"Women"}
                baseRoute="/women"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("women") ||
                  (p.category?.toLowerCase().includes("tops") &&
                    !p.category
                      ?.toLowerCase()
                      .toLowerCase()
                      .includes("laptops"))
                }
              />
            }
          />
          <Route
            path="/women/:category"
            element={
              <CategoryProducts
                title={"Women"}
                baseRoute="/women"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("women") ||
                  (p.category?.toLowerCase().includes("tops") &&
                    !p.category
                      ?.toLowerCase()
                      .toLowerCase()
                      .includes("laptops"))
                }
              />
            }
          />
          // Technology
          <Route
            path="/technology"
            element={
              <CategoryProducts
                title={"Technology"}
                baseRoute="/technology"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("laptops") ||
                  p.category?.toLowerCase().includes("mobile") ||
                  p.category?.toLowerCase().includes("smartphones") ||
                  p.category?.toLowerCase().includes("tablets")
                }
              />
            }
          />
          <Route
            path="/technology/:category"
            element={
              <CategoryProducts
                title={"Technology"}
                baseRoute="/technology"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("laptops") ||
                  p.category?.toLowerCase().includes("mobile") ||
                  p.category?.toLowerCase().includes("smartphones") ||
                  p.category?.toLowerCase().includes("tablets")
                }
              />
            }
          />
          // Beauty
          <Route
            path="/beauty"
            element={
              <CategoryProducts
                title={"Beauty"}
                baseRoute="/beauty"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("beauty") ||
                  p.category?.toLowerCase().includes("fragrances") ||
                  p.category?.toLowerCase().includes("skin") ||
                  p.category?.toLowerCase().includes("sunglasses")
                }
              />
            }
          />
          <Route
            path="/beauty/:category"
            element={
              <CategoryProducts
                title={"Beauty"}
                baseRoute="/beauty"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("beauty") ||
                  p.category?.toLowerCase().includes("fragrances") ||
                  p.category?.toLowerCase().includes("skin") ||
                  p.category?.toLowerCase().includes("sunglasses")
                }
              />
            }
          />
          // Decoration
          <Route
            path="/decoration"
            element={
              <CategoryProducts
                title={"Decoration"}
                baseRoute="/decoration"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("decoration") ||
                  p.category?.toLowerCase().includes("furniture")
                }
              />
            }
          />
          <Route
            path="/decoration/:category"
            element={
              <CategoryProducts
                title={"Decoration"}
                baseRoute="/decoration"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("decoration") ||
                  p.category?.toLowerCase().includes("furniture")
                }
              />
            }
          />
          // Sport
          <Route
            path="/sport"
            element={
              <CategoryProducts
                title={"Sport"}
                baseRoute="/sport"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("sport")
                }
              />
            }
          />
          <Route
            path="/sport/:category"
            element={
              <CategoryProducts
                title={"Sport"}
                baseRoute="/sport"
                products={products}
                carts={carts}
                setCarts={setCarts}
                categoryChecker={(p) =>
                  p.category?.toLowerCase().includes("sport")
                }
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                carts={carts}
                setCarts={setCarts}
                orders={orders}
                setOrders={setOrders}
                handleAddQuantity={handleAddQuantity}
                handleSubtractQuantity={handleSubtractQuantity}
                handleDeleteCart={handleDeleteCart}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Orders
                orders={orders}
                setTrackPackage={setTrackPackage}
                carts={carts}
                setCarts={setCarts}
              />
            }
          />
          <Route
            path="/tracking"
            element={<Tracking trackPackage={trackPackage} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
