import {IStateInterface} from "./Products/reducer/IState.interface";
import {IAdminReducer} from "./Admin/reducer/IAdminReducer";

export default interface IAppStateInterface {
  productState: IStateInterface;
  form: any,
  adminState: IAdminReducer
}
