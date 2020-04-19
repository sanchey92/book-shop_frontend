import IProductInterface from "../../Products/reducer/IProduct.interface";

export default class ShopService {

  fetchProducts = async (): Promise<IProductInterface[]> => {
    const products = await fetch(`http://localhost:3001/shop/products`);
    return await products.json();
  };

  fetchProductById = async (id: string): Promise<IProductInterface> => {
    const product = await fetch(`http://localhost:3001/shop/products/${id}`);
    return await product.json();
  };
}
