import IProductInterface from "../../Products/reducer/IProduct.interface";

export default class AdminService {

  static postAddProduct = async (data: IProductInterface) => {

    const URL = 'http://localhost:3001/admin';

    const setting = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    const response = await fetch(`${URL}/add-product`, setting);
    console.log(response.json())
    return await response.json()
  }

  static deleteProductById = async (id: string) => {
    return  await fetch(`http://localhost:3001/admin/delete-product/${id}`, {method: 'DELETE'});
  }
}
