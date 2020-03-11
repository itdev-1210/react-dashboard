import { EgretLoadable } from "egret";

const RevenueCenter = EgretLoadable({
  loader: () => import("./RevenueCenter")
});

const revenueCenterRoutes = [
  {
    path: "/revenue_center",
    exact: true,
    component: RevenueCenter
  }
];

export default revenueCenterRoutes;
