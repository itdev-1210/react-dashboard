import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import peopleRoutes from "./views/peoples/PeopleRoutes";
import myFleetRoutes from "./views/my-fleet/MyFleetRoutes";
import ridesRoutes from "./views/rides/RidesRoutes";
import revenueCenterRoutes from "./views/revenue-center/RevenueCenterRoutes";
import marketingRoutes from "./views/marketing/MarketingRoutes";
import supportRoute from "./views/support/SupportRoutes";
import profileRoute from './views/profile/ProfileRoutes';
import mainProfileRoute from './views/main-profile/ProfileRoutes';

import sessionRoutes from "./views/sessions/SessionRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...peopleRoutes,
  ...myFleetRoutes,
  ...ridesRoutes,
  ...revenueCenterRoutes,
  ...marketingRoutes,
  ...supportRoute,
  ...profileRoute,
  ...mainProfileRoute,
  ...redirectRoute,
  ...errorRoute
];

export default routes;
