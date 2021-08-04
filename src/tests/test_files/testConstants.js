const microverseApiComments = [
  {
    creation_date: '2021-08-02',
    username: 'Warren',
    comment: '     \n        Was good !',
  },
];

const microverseApiReservations = [
  {
    username: 'Jane',
    date_start: '2020-10-15',
    date_end: '2020-10-16',
  },
  {
    date_end: '2020-10-16',
    date_start: '2020-10-15',
    username: 'Jane',
  },
  {
    username: 'Jane',
    date_start: '2020-10-15',
    date_end: '2020-10-16',
  },
  {
    date_end: '2020-10-16',
    username: 'Jane',
    date_start: '2020-10-15',
  },
];

const microverseApiLikes = [
  {
    likes: 49,
    item_id: 'item1',
  },
  {
    likes: 10,
    item_id: 'sandwich',
  },
  {
    item_id: 'burger',
    likes: 10,
  },
  {
    item_id: 'tacos',
    likes: 5,
  },
  {
    item_id: 'fries',
    likes: 8,
  },
  {
    likes: 5,
    item_id: 'doughnut',
  },
  {
    item_id: 'hotdog',
    likes: 5,
  },
  {
    item_id: 'pizza',
    likes: 3,
  },
];

const abiApiResponse = [
  {
    id: '1',
    name: 'hotdog',
    type: 'food',
    price: '4.50',
    ingredients: 'Sausage, salat, cheese',
    image: 'https://microverse.abi.api.waldenberginc.com/images/hotdog.png',
    created: '2012-06-01 02:12:30',
    reservations: microverseApiReservations,
    comments: microverseApiComments,
    stars: 23,
  },
  {
    id: '2',
    name: 'sandwich',
    type: 'food',
    price: '5.50',
    ingredients: 'Bread, salad, hame & cheese',
    image: 'https://microverse.abi.api.waldenberginc.com/images/sandwich.png',
    created: '2013-03-03 01:20:10',
    reservations: microverseApiReservations,
    comments: microverseApiComments,
    stars: 23,
  },
  {
    id: '3',
    name: 'tacos',
    type: 'food',
    price: '3.50',
    ingredients: 'Tortilla, meat, salad',
    image: 'https://microverse.abi.api.waldenberginc.com/images/tacos.png',
    created: '2014-09-20 03:10:25',
    reservations: microverseApiReservations,
    comments: microverseApiComments,
    stars: 23,
  },
  {
    id: '4',
    name: 'burger',
    type: 'food',
    price: '2.50',
    ingredients: 'burger',
    image: 'https://microverse.abi.api.waldenberginc.com/images/burger.png',
    created: '2015-04-11 04:11:12',
    reservations: microverseApiReservations,
    comments: microverseApiComments,
    stars: 23,
  },
  {
    id: '5',
    name: 'fries',
    type: 'food',
    price: '2.50',
    ingredients: 'Potatoes',
    image: 'https://microverse.abi.api.waldenberginc.com/images/fries.png',
    created: '2016-01-04 05:20:30',
    reservations: microverseApiReservations,
    comments: microverseApiComments,
    stars: 23,
  },
  {
    id: '6',
    name: 'pizza',
    type: 'food',
    price: '8.45',
    ingredients: 'Mozzarella, tomato, meat',
    image: 'https://microverse.abi.api.waldenberginc.com/images/pizza.png',
    created: '2017-01-10 06:40:10',
    reservations: microverseApiReservations,
    comments: microverseApiComments,
    stars: 23,
  },
  {
    id: '7',
    name: 'doughnut',
    type: 'food',
    price: '2.50',
    ingredients: 'Delicious donuts',
    image: 'https://microverse.abi.api.waldenberginc.com/images/doughnut.png',
    created: '2018-01-04 05:15:35',
    reservations: microverseApiReservations,
    comments: microverseApiComments,
    stars: 23,
  },
  {
    id: '8',
    name: 'drinks',
    type: 'drink',
    price: '1.50',
    ingredients: 'Soda',
    image: 'https://microverse.abi.api.waldenberginc.com/images/drink.png',
    created: '2019-01-02 02:20:30',
    reservations: microverseApiReservations,
    comments: microverseApiComments,
    stars: 23,
  },
];

export {
  abiApiResponse,
  microverseApiComments,
  microverseApiLikes,
  microverseApiReservations,
};
