import {IStateInterface} from "./Products/reducer/IState.interface";
import {IAdminReducer} from "./Admin/reducer/IAdminReducer";
import {ICartState} from "./Cart/reducers/IcartState";
import {IOrderState} from "./Orders/reducers/IOrderState";
import {IUserState} from "./AuthUser/reducer/IUserState";

export default interface IAppStateInterface {
  productState: IStateInterface;
  form: any,
  adminState: IAdminReducer,
  cartState: ICartState,
  orderState: IOrderState,
  userState: IUserState
}
