import Mock from "../mock";

const ListDB = {
  list: [
    {
        id: 1,
        name: "Aarón Beltran",
        role: "Admin",
        role_id: 1,
        phone: "3197588689",
        email: "trresqwe@gmail.com",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status_id: 2,
        status: "Debt",
    },
    {
        id: 2,
        name: "Adrian Derincovsky",
        role: "Operator",
        role_id: 2,
        phone: "3197588689",
        email: "carloscortes@cosmicgo.co",
        avatar_src: "/assets/images/face-1.jpg",
        city: "Bogota",
        country: "Columbia",
        status_id: 1,
        status: "Available",
    },
  ]
};

Mock.onGet("/api/renter/get-renter-list").reply(config => {
  const response = ListDB.list;
  return [200, response];
});
