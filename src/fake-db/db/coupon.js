import Mock from "../mock";

const ListDB = {
  list: [
    {
        id: 1,
        coupon: "cosmicgo3b2a1",
        name: "cosmicgo3",
        start_date: "Dec 20 2019",
        expiration_date: "Jan 31 2020",
        benefit: "150 MINUTES",
        status_id: 1,
        status: "Available",
    },
    {
        id: 2,
        coupon: "cosmicgo3b2a2",
        name: "cosmicgo3",
        start_date: "Dec 20 2019",
        expiration_date: "Jan 31 2020",
        benefit: "150 MINUTES",
        status_id: 1,
        status: "Available",
    },
  ]
};

Mock.onGet("/api/coupon/get-coupon-list").reply(config => {
  const response = ListDB.list;
  return [200, response];
});
