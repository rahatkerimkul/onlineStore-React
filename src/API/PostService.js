import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      if (response.status === 200) {
        return response.data.map(this._transformProduct);
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  }

  static _transformProduct = (product) => {
    return {
      id: product.id,
      name: product.title,
      price: product.price,
      urlimage: product.image,
      url: "",
    };
  };
}
