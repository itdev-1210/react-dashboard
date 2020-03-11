import Mock from "../mock";

const ListDB = {
  list: [
    {
        id: 'A0001',
        imei: "868020030136146",
        qrcode: '/assets/images/fleet/qrcode.svg',
        battery: "49%",
        last_transmition: "Dec 21, 2019 11:17:43 PM",
        state: 1,
        signal: 1,
        lock: 0,
        light: 0
    },
    {
      id: 'A0002',
      imei: "868020030136146",
      qrcode: '/assets/images/fleet/qrcode.svg',
      battery: "3%",
      last_transmition: "Dec 21, 2019 11:17:43 PM",
      state: 1,
      signal: 1,
      lock: 1,
      light: 1
    }
  ]
};

Mock.onGet("/api/inventory/get-inventory-list").reply(config => {
  const response = ListDB.list;
  return [200, response];
});
