import { EgretLoadable } from "egret";

const Rides = EgretLoadable({
  loader: () => import("./Rides")
});

const ridesRoutes = [
  {
    path: "/rides",
    component: Rides
  }
];

export default ridesRoutes;
