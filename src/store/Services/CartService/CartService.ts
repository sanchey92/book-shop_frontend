export default class CartService {

  static getCart = async () => {
    const cartProducts = await fetch(`http://localhost:3001/shop/cart`);
    return await cartProducts.json()
  }

  static addToCart = async (id: string) => {
  }

  static deleteFromCart = async (id: string) => {

  }
}