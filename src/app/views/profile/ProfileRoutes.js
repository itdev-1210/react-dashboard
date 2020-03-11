import { EgretLoadable } from "egret";

const Profile = EgretLoadable({
  loader: () => import("./Profile")
});

const profileRoutes = [
  {
    path: "/user-profile",
    component: Profile
  }
];

export default profileRoutes;
