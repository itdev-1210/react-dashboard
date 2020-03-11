import { EgretLoadable } from "egret";

const Support = EgretLoadable({
  loader: () => import("./Support")
});

const supportRoute = [
  {
    path: "/support",
    exact: true,
    component: Support
  }
];

export default supportRoute;
