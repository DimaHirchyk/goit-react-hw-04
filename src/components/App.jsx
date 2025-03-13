import LoadMoreBtn from "./button/LoadMoreBtn";
import ErrorMessage from "./error/ErrorMessage";
import ImageGallery from "./gallery/ImageGallery";
import Loader from "./loader/Loader";
import ImageModal from "./modal/ImageModal";
import Searchbar from "./search/SearchBar";
import { fetchFoto } from "./fetch/FetchFoto";
import { useState } from "react";

function App() {
  const [fotos, setFoto] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setLoading(true);
      setFoto([]);

      const data = await fetchFoto(topic);
      console.log(data.results);
      setFoto(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <ImageGallery images={fotos} />
      <LoadMoreBtn />
      {loading && <Loader loading={loading} />}
      <ErrorMessage />
      <ImageModal />
    </>
  );
}

export default App;
