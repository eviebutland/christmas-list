import { useState } from "react";
import { fetchAllImages } from "./utils/fetchImages";

function App() {
  const [images, setImages] = useState([]);

  // or is first loadd
  if (!images.length) {
    triggerFetchImages();
  }
  async function triggerFetchImages() {
    const images = await fetchAllImages();
    setImages(images);
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

      {/* loader */}
      <section className="grid-col-12">
        {/* loop through images into a grid */}
        {images && <div>{images[0]?.color}</div>}
        <div></div>
      </section>
      <footer>
        <div>
          <a href="https://www.pexels.com" className="text-xs">
            Photos provided by Pexels
          </a>

          <a href="https://www.pexels.com">
            <img
              className="max-h-[20px]"
              src="https://images.pexels.com/lib/api/pexels.png"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
