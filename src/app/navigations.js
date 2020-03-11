import { ReactComponent as Dashboard } from "./img/dashboard.svg"
import { ReactComponent as People } from "./img/people.svg"
import { ReactComponent as MyFleet } from "./img/fleet.svg"
import { ReactComponent as Ride } from "./img/ride.svg"
import { ReactComponent as Revenue } from "./img/revenue.svg"
import { ReactComponent as Marketing } from "./img/marketing.svg"
import { ReactComponent as Support } from "./img/support.svg"
export const navigations = [
  {
    name: "Dashboard",
    icon: "dashboard",
    iconComponent: Dashboard,
    path: "/dashboard",
  },
  {
    name: "People",
    icon: "person",
    iconComponent: People,
    path: "/people",
  },
  {
    name: "My Fleet",
    icon: "receipt",
    iconComponent: MyFleet,
    path: "/my_fleet"
  },
  {
    name: "Rides",
    icon: "group_work",
    iconComponent: Ride,
    path: "/rides"
  },
  {
    name: "Revenue Center",
    icon: "date_range",
    iconComponent: Revenue,
    path: "/revenue_center"
  },
  {
    name: "Marketing",
    icon: "chat",
    iconComponent: Marketing,
    path: "/marketing"
  },
  {
    name: "Support",
    icon: "inbox",
    iconComponent: Support,
    path: "/support"
  }
];
