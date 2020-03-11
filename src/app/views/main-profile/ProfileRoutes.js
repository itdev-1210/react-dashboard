import { EgretLoadable } from "egret";

const MainProfile = EgretLoadable({
  loader: () => import("./Profile")
});

const mainProfileRoutes = [
  {
    path: "/profile",
    component: MainProfile
  }
];

export default mainProfileRoutes;
