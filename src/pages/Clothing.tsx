import { useState } from "react";
import { Page } from "../components/Page";
import { useClothingStore } from "../store/clothing";
import { Loading } from "../components/Loading";
import { Button } from "@nextui-org/button";
// use memo
export const Clothing = () => {
  // Each clothing item can have check box to update state if it's been purchased
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const clothes = useClothingStore((state) => state.clothes);
  const fetchClothingItems = useClothingStore(
    (state) => state.fetchClothingItems,
  );

  const clothingBrands = clothes?.map((clothingItem) => clothingItem.brand);

  async function fetchClothingWishlist() {
    // convert to use react query?
    setIsLoading(true);
    setIsFirstLoad(true);
    try {
      await fetchClothingItems();
      console.log(clothes);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsFirstLoad(false);
    }
  }

  if (!isLoading && isFirstLoad) {
    fetchClothingWishlist();
  }
  // check if there is already data here
  return (
    <Page>
      <h1>Clothes wishlist</h1>
      {isFirstLoad && isLoading && <Loading />}
      <div className="flex">
        <section>
          {clothes.map((clothingItem) => (
            <div className="py-3" key={`clothing-item-${clothingItem.id}`}>
              <div className="flex space-x-2 items-center">
                <input name="purchased" type="checkbox" />
                <a href={clothingItem.url} target="_blank">
                  <strong>{clothingItem.title}</strong>
                </a>
                <div className="">
                  {/* Change to a delete icon */}
                  <Button
                    size="sm"
                    variant="bordered"
                    color="danger"
                    className="rounded"
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <button>More info</button>
            </div>
          ))}
        </section>

        <section>
          <h2>Add new item</h2>
          <form>
            <div>
              <label>Name:</label>
              <input className="border" type="text" />
            </div>

            <div>
              <label htmlFor="brand">Brand:</label>
              <select name="brand" id="brand">
                {clothingBrands.map((brand, index) => (
                  <option key={`brand-${index}`} value="brand">
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>URL: </label>
              <input className="border" type="text" />
            </div>

            <Button className="rounded">Add to list</Button>
          </form>
        </section>
      </div>
    </Page>
  );
};
