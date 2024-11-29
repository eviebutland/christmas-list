import { useState } from "react";
import { fetchAllImages } from "./utils/fetchImages";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  // or is first loadd
  if (!images?.length && !isLoading && isFirstLoad) {
    triggerFetchImages();
  }

  async function triggerFetchImages() {
    setIsLoading(true);

    try {
      const images = await fetchAllImages();

      console.log(images);
      setImages(images);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFirstLoad(false);
      setIsLoading(false);
    }
  }
  return (
    <>
      <nav>
        <ul className="flex justfiy-end w-full gap-3">
          <li>
            <a href="/wish-list">Evie's Wish list</a>
          </li>
          <li>
            <a href="/food">Food</a>
          </li>
          <li>
            <a href="/clothing">Clothing</a>
          </li>
          <li>
            <a href="/homeware">Homeware</a>
          </li>
          <li>
            <a href="/family">Family list</a>
          </li>
        </ul>
      </nav>
      <h1>Christmas store wish list</h1>

      {isLoading && isFirstLoad && <div>Loading</div>}
      <section className="masonry">
        {images.map((image) => (
          <div className="item" key={image.id}>
            <img
              className=" w-auto h-auto"
              src={image.urls.full}
              alt={image.alt_description}
            />
            {image.color}
          </div>
        ))}
        <div></div>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
