import Mock from "../mock";

const ListDB = {
  list: [
    {
      id: 1,
      email: "tato.beq@gmail.com",
      order_id: "1246-DEC242019-OD-A1033",
      cost: "2.200",
      date: "Dev 24, 2019 8:13 PM",
      status_id: 1,
      status: "Succeed",
    },
    {
      id: 2,
      email: "tato2.beq@gmail.com",
      order_id: "1246-DEC242019-OD-A1033",
      cost: "2.200",
      date: "Dev 24, 2019 8:13 PM",
      status_id: 2,
      status: "Failed",
    },
    {
      id: 3,
      email: "tato3.beq@gmail.com",
      order_id: "1246-DEC242019-OD-A1033",
      cost: "2.200",
      date: "Dev 24, 2019 8:13 PM",
      status_id: 3,
      status: "Free",
    },
  ]
};

Mock.onGet("/api/revenue/get-revenue-list").reply(config => {
  const response = ListDB.list;
  return [200, response];
});
