import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";

const Dashboard = EgretLoadable({
  loader: () => import("./Dashboard")
});

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    auth: authRoles.admin
  },
];

export default dashboardRoutes;
