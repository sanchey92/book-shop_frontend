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
    const data = {
      id: id
    }
    const cartProducts =  await fetch(`http://localhost:3001/shop/cart/remove-product`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await cartProducts.json()
  }
}