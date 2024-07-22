const express = require('express');
const router = express.Router();

const cmsNewRoute = require('./news-route');
const webMenuRoute = require('./webMeun-route');


const defaultRoutes = [
  {
    path: '/news',
    route: cmsNewRoute
  },
  {
    path: '/webMenu',
    route: webMenuRoute
  },
];

// 拼接路由
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
