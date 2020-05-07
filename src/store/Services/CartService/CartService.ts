export default class CartService {

  static getCart = async () => {
    const cartProducts = await fetch(`http://localhost:3001/shop/cart`);
    return await cartProducts.json()
  }

  static addToCart = async (id: string) => {
    const cartProducts =  await fetch(`http://localhost:3001/shop/cart/${id}`);
    return await  cartProducts.json()
  }

  static deleteFromCart = async (id: string) => {
    const cartProducts =  await fetch(`http://localhost:3001/shop/cart/remove-product/${id}`, {
      method: 'POST',

    });
    return await cartProducts.json()
  }
}