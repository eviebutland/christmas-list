import { useState } from "react";
// import { fetchAllImages } from "./utils/fetchImages";
import { MasonaryGrid } from "./components/masonary-grid";
import { MasonaryItem } from "./components/masonary-item";
import { Image } from "./types/images";
import { useImageStore } from "./store/images";
import { useShallow } from "zustand/shallow";
import { Loading } from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // only access the thing you need as it will save re-rendering
  // use shallow will make sure component only re-renders when the value it's looking at changes
  const images = useImageStore(useShallow((state) => state.images));
  const setImages = useImageStore((state) => state.setImages);

  if (!isLoading && isFirstLoad) {
    triggerFetchImages();
  }

  async function triggerFetchImages() {
    setIsLoading(true);

    await setImages();

    setIsFirstLoad(false);
    setIsLoading(false);
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

      {isLoading && isFirstLoad && <Loading />}

      {!isFirstLoad && !!images.length && (
        <MasonaryGrid items={images}>
          {images.map((image) => (
            <MasonaryItem<Image> item={image} />
          ))}
        </MasonaryGrid>
      )}
      <footer></footer>
    </>
  );
}

export default App;
