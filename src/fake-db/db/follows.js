import Mock from "../mock";

const ListDB = {
  list: [
    {
        id: 1,
        name: "Adrian Derincovsky",
        role: "Admin",
        role_id: 1,
        email: "adrian.derincovsky@cosmicgo.co",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status: "Idle",
        followers: 3,
    },
    {
        id: 2,
        name: "Adrian Derincovsky",
        role: "Operator",
        role_id: 2,
        email: "carloscortes@cosmicgo.co",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status: "Live",
        followers: 0,
    },
  ]
};

Mock.onGet("/api/follow/get-follow-list").reply(config => {
  const response = ListDB.list;
  return [200, response];
});
