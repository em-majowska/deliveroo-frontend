import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import axios from "axios";
import Category from "./components/Category";
import Cart from "./components/Cart";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--cbyxgq8rr8f2.code.run",
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        error.message && console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Header />
      <main>
        <Hero
          title={data.restaurant.name}
          content={data.restaurant.description}
        />
        <div className="content container">
          <div className="categories">
            {data.categories.slice(0, 6).map((category, index) => {
              return (
                <Category
                  key={index}
                  name={category.name}
                  meals={category.meals}
                />
              );
            })}
          </div>
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
