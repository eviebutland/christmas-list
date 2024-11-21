import { Page } from "../components/Page";

// use memo
export const Clothing = () => {
  // collate links here & then once pages are built we can convert them to be fetched from custom API

  // use zustand?

  async function fetchClothingWishlist() {
    // convert to use react query?
    try {
      const response = await fetch("http://localhost:3001/clothes", {
        method: "GET",
      });
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  // check if there is already data here
  fetchClothingWishlist();
  return <Page>Page contents here</Page>;
};
