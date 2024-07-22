const express = require('express');
const cmsNewRoute = require('./cms/newsRoute');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/cms/news',
    route: cmsNewRoute,
  },
];

// 拼接路由
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
  console.log(router.use(route.path, route.route),'router.use(route.path, route.route);')
});

module.exports = router;
