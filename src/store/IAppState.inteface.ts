import {IStateInterface} from "./Products/reducer/IState.interface";
import {IAdminReducer} from "./Admin/reducer/IAdminReducer";
import {ICartState} from "./Cart/reducers/IcartState";

export default interface IAppStateInterface {
  productState: IStateInterface;
  form: any,
  adminState: IAdminReducer,
  cartState: ICartState
}
