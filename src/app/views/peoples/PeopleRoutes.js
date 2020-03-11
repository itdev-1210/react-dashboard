import { EgretLoadable } from "egret";

const People = EgretLoadable({
  loader: () => import("./People")
});

const peopleRoute = [
  {
    path: "/people",
    exact: true,
    component: People
  }
];

export default peopleRoute;
