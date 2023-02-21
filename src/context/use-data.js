import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [sliderData, setsliderData] = useState([]);
  const [category, setCategory] = useState();
  const [categoryData, setCategoryData] = useState([]);

  const fetchAllData = async () => {
    try {
      const response = await fetch(category ?
        `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=bb6e25c542f446c0a02d92d0132b10a1?q=${category}` : `https://newsapi.org/v2/top-headlines?country=tr&apiKey=bb6e25c542f446c0a02d92d0132b10a1`
      );
      const json = await response.json();
      setsliderData(json.articles.splice(0, 3));
      setNews(json.articles);
      console.log(json.articles)

    } catch (error) {
      console.log("error", error);
    }
  };

  // const fetchCategoryData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=bb6e25c542f446c0a02d92d0132b10a1?q=${category}`
  //     );
  //     const json = await response.json();
  //     setCategoryData(json.articles);
  //     console.log(json);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  useEffect(() => {
    fetchAllData();
  }, []);
  useEffect(() => {
    console.log(category, "kategori");
  }, [category]);

  return (
    <DataContext.Provider
      value={{ news, sliderData, setNews, setsliderData, setCategory }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default Provider;
