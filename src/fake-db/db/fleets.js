import Mock from "../mock";

const ListDB = {
  list: [
    {
        id: 1,
        name: "Live Ops",
        role: "Admin",
        role_id: 1,
        email: "adrian.derincovsky@cosmicgo.co",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status: "Idle",
    },
    {
        id: 2,
        name: "Inventory",
        role: "Operator",
        role_id: 2,
        email: "carloscortes@cosmicgo.co",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status: "Live",
    },
    {
        id: 3,
        name: "Maintenance",
        role: "Owner",
        role_id: 3,
        email: "test@cosmicgo.co",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status: "Idle",
    },
    {
        id: 4,
        name: "SIMS & Data",
        role: "Admin",
        role_id: 1,
        email: "test1@cosmicgo.co",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status: "Idle",
    },
    {
        id: 5,
        name: "Insurance",
        role: "Owner",
        role_id: 3,
        email: "test2@cosmicgo.co",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status: "Idle",
    },
  ]
};

Mock.onGet("/api/fleet/get-fleet-list").reply(config => {
  const response = ListDB.list;
  return [200, response];
});
