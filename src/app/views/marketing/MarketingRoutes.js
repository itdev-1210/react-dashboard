import { EgretLoadable } from "egret";

const Marketing = EgretLoadable({
  loader: () => import("./Marketing")
});

const marketingRoutes = [
  {
    path: "/marketing",
    component: Marketing
  }
];

export default marketingRoutes;
