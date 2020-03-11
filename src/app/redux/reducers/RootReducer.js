import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import PeopleReducer from "./PeopleReducer";
import MyFleetReducer from "./MyFleetReducer";
import FollowReducer from "./FollowReducer";
import InventoryReducer from "./InventoryReducer";
import RideReducer from './RideReducer';
import RenterReducer from './RenterReducer';
import EventReducer from './EventReducer';
import CouponReducer from './CouponReducer';
import RevenueReducer from './RevenueReducer';
import FilterReducer from './FilterReducer';

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  people: PeopleReducer,
  fleet: MyFleetReducer,
  follow: FollowReducer,
  inventory: InventoryReducer,
  ride: RideReducer,
  renter: RenterReducer,
  event: EventReducer,
  coupon: CouponReducer,
  revenue: RevenueReducer,
  filter: FilterReducer,
});

export default RootReducer;
