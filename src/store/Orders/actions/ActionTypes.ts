import {IFetchOrderFailure, IFetchOrderSuccess, IGetOrderStart, IPostOrdersStart} from "./Interfaces";

type ActionOrderTypes =
  IGetOrderStart
  | IPostOrdersStart
  | IFetchOrderSuccess
  | IFetchOrderFailure

export default ActionOrderTypes