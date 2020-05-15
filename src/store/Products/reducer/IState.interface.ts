import IProductInterface from "./IProduct.interface";

export interface IStateInterface {
  data: IProductInterface[],
  product: IProductInterface | null,
  isFetching: boolean,
  searchProduct: IProductInterface[] | null
}
