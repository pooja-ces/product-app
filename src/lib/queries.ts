export async function getProducts(searchQuery: string) {
    try {
      // API request with search query as a URL parameter
      const response = await fetch(`http://localhost:3000/api/products?search=${encodeURIComponent(searchQuery)}`);
      return await response.json();  // Parse the response as JSON
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];  // Return an empty array in case of an error
    }
  }
  