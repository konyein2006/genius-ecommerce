import { ReactTyped } from "react-typed";
import ShoppingImage from "../assets/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import Categories from "./Categories";
import CategoriesList from "./CategoriesList";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-fit flex-1 bg-white dark:bg-black ">
      <div
        className="h-135 w-full  bg-cover bg-center bg-no-repeat flex flex-col items-center justify-end"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${ShoppingImage})`,
        }}
      >
        <div className="flex flex-col items-start gap-1 my-32 md:my-28 lg:my-16">
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white  bebas uppercase">
            Beyond the Miles, <br />
            into the everyday
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white ">
            Start Your Journey & Step Into Everyday
          </p>
        </div>
      </div>
      <h1
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-30 text-zinc-900 dark:text-zinc-100 
       "
      >
        Explore{" "}
        <ReactTyped
          strings={["Men's", "Women's", "Beauty", "Decor", "Tech", "Sports"]}
          typeSpeed={100}
          backSpeed={50}
          loop={true}
          className="text-green-500 dark:text-green-400"
        />
        essentials, all on{" "}
        <span className="text-green-500 dark:text-green-400">one</span> page.
      </h1>
      <Categories />
      <CategoriesList />
    </div>
  );
}
