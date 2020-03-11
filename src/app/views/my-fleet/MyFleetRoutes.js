import { EgretLoadable } from "egret";

const MyFleet = EgretLoadable({
  loader: () => import("./MyFleet")
});

const myFleetRoutes = [
  {
    path: "/my_fleet",
    exact: true,
    component: MyFleet
  }
];

export default myFleetRoutes;
