export async function fetchAllImages() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos`, {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
