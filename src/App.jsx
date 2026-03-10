import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";

// const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(apiUrl);
        const response = await axios.get("http://localhost:3000");

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
      <Main data={data} />
    </>
  );
}

export default App;
